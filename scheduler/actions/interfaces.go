/*
 * Copyright (c) 2018. Abstrium SAS <team (at) pydio.com>
 * This file is part of Pydio Cells.
 *
 * Pydio Cells is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio Cells is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio Cells.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

// Package actions provides interfaces to manage tasks and provides default implementation for common actions.
//
// Action are registered by ID during the init phase of each actions' subfolder
package actions

import (
	"context"
	"time"

	"github.com/pydio/cells/common/forms"

	"github.com/micro/go-micro/client"

	"github.com/pydio/cells/common/proto/jobs"
)

type Concrete func() ConcreteAction

const (
	ActionCategoryTree      = "01 - Files/Folders Operations"
	ActionCategoryArchives  = "02 - Archives Operations"
	ActionCategoryScheduler = "03 - Scheduler Tools / Internals"
	ActionCategoryPutGet    = "04 - Upload/Download to External Servers"
	ActionCategoryCmd       = "05 - Atomic Commands and Scripts"
	ActionCategoryMedia     = "06 - Media Processing"
	ActionCategoryIDM       = "07 - Identity Management"
	ActionCategoryNotify    = "08 - Notifications and Emails"
	ActionCategoryETL       = "09 - Extract/Load/Transform"
)

var CategoryTints = map[string]string{
	ActionCategoryTree:      "#03a9f4",
	ActionCategoryArchives:  "#fbc02d",
	ActionCategoryScheduler: "#009688",
	ActionCategoryPutGet:    "#4caf50",
	ActionCategoryCmd:       "#795548",
	ActionCategoryMedia:     "#f44336",
	ActionCategoryIDM:       "#438db3",
	ActionCategoryNotify:    "#ff9800",
	ActionCategoryETL:       "#009688",
}

type ActionDescription struct {
	ID                string
	Label             string
	Icon              string
	Description       string
	Category          string
	Tint              string
	InputDescription  string
	OutputDescription string
	SummaryTemplate   string
	HasForm           bool
}

// ConcreteAction is the base interface for pydio actions. All actions must implement this interface.
type ConcreteAction interface {

	// Unique identifier
	GetName() string
	// Pass parameters
	Init(job *jobs.Job, cl client.Client, action *jobs.Action) error
	// Run the actual action code
	Run(ctx context.Context, channels *RunnableChannels, input jobs.ActionMessage) (jobs.ActionMessage, error)
}

// Actions that implement this interface can send their status updates to a parent task
type TaskUpdaterDelegateAction interface {
	SetTask(task *jobs.Task)
}

// Actions that implement this interface will publish progress updates on the progress channel.
type ProgressProviderAction interface {
	ProvidesProgress() bool
}

// DescriptionProviderAction has a human-readable label
type DescriptionProviderAction interface {
	GetDescription(lang ...string) ActionDescription
	GetParametersForm() *forms.Form
}

// Actions that implement this interface can eventually be stopped and/or paused+resumed
type ControllableAction interface {
	CanPause() bool
	CanStop() bool
}

// Actions that implement this interface may perform some recursive nodes listing internally.
// If the action definition has a NodeFilter set, pass this along to the running instance to
// filter nodes on the go.
type RecursiveNodeWalkerAction interface {
	SetNodeFilterAsWalkFilter(*jobs.NodesSelector)
}

// RunnableChannels defines the API to communicate with a Runnable via Channels
type RunnableChannels struct {
	// Input Channels
	Pause  chan interface{}
	Resume chan interface{}
	Stop   chan interface{}
	// Output Channels
	Status    chan jobs.TaskStatus
	StatusMsg chan string
	Progress  chan float32
}

// BlockUntilResume returns a blocking channel that can be inserted anywhere to block execution
func (r *RunnableChannels) BlockUntilResume(maxPauseTime ...time.Duration) chan interface{} {
	blocker := make(chan interface{})
	var unlockTime time.Duration
	if len(maxPauseTime) > 0 {
		unlockTime = maxPauseTime[0]
	} else {
		unlockTime = time.Minute * 30
	}
	unlockCh := time.After(unlockTime)
	r.Status <- jobs.TaskStatus_Paused
	go func() {
		for {
			select {
			case <-r.Resume:
				r.Status <- jobs.TaskStatus_Running
				blocker <- true
				return
			case <-r.Stop:
				r.Status <- jobs.TaskStatus_Interrupted
				blocker <- true
				return
			case <-unlockCh:
				r.Status <- jobs.TaskStatus_Running
				blocker <- true
				return
			}
		}
	}()
	return blocker
}

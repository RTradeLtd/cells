/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
import React from 'react'
import {Paper, IconButton, TextField, FlatButton, IconMenu, FontIcon, MenuItem} from 'material-ui'
const {muiThemeable} = require('material-ui/styles');
import Editor from '../editor/Editor'
import PydioApi from 'pydio/http/api'
import Pydio from 'pydio'
import {loadEditorClass} from "../editor/util/ClassLoader";
const PydioComponents = Pydio.requireLib('components');
const {MaterialTable} = PydioComponents;
const {ModernTextField} = Pydio.requireLib('hoc');

let RolesDashboard = React.createClass({

    mixins: [AdminComponents.MessagesConsumerMixin],

    getInitialState(){
        return {
            roles: [],
            loading: false,
            showTechnical: false,
        };
    },

    load(){
        const {showTechnical} = this.state;
        this.setState({loading: true});
        Pydio.startLoading();
        PydioApi.getRestClient().getIdmApi().listRoles(showTechnical, 0, 1000).then(roles => {
            Pydio.endLoading();
            this.setState({roles: roles, loading: false});
        }).catch(e => {
            Pydio.endLoading();
            this.setState({loading: false});
        });
    },

    componentDidMount(){
        this.load();
    },

    openTableRows(rows) {
        if (rows.length) {
            this.openRoleEditor(rows[0].role);
        }
    },

    openRoleEditor(idmRole, initialSection = 'activity'){
        const {pydio, rolesEditorClass} = this.props;
        if(this.refs.editor && this.refs.editor.isDirty()){
            if(!window.confirm(pydio.MessageHash["role_editor.19"])) {
                return false;
            }
        }
        loadEditorClass(rolesEditorClass, Editor).then(component => {
            this.props.openRightPane({
                COMPONENT:component,
                PROPS:{
                    ref:"editor",
                    idmRole:idmRole,
                    pydio: pydio,
                    initialEditSection:initialSection,
                    onRequestTabClose:this.closeRoleEditor
                }
            });
        });
        return true;

    },

    closeRoleEditor(){
        if(this.refs.editor && this.refs.editor.isDirty()){
            if(!window.confirm(this.props.pydio.MessageHash["role_editor.19"])) {
                return false;
            }
        }
        this.props.closeRightPane();
        return true;
    },


    deleteAction(roleId){
        const {pydio} = this.props;
        pydio.UI.openComponentInModal('PydioReactUI', 'ConfirmDialog', {
            message:pydio.MessageHash['settings.126'],
            validCallback:() => {
                PydioApi.getRestClient().getIdmApi().deleteRole(roleId).then(()=> {
                    this.load();
                })
            }
        });
    },

    createRoleAction(){
        pydio.UI.openComponentInModal('AdminPeople','Forms.CreateRoleOrGroupForm', {
            type:'role',
            roleNode:this.state.currentNode,
            openRoleEditor:this.openRoleEditor.bind(this),
            reload: () => {this.load()}
        });
    },

    computeTableData(searchRoleString){
        const {roles} = this.state;
        let data = [];
        roles.map((role) => {
            const label = role.Label;
            if (searchRoleString && label.toLowerCase().indexOf(searchRoleString.toLowerCase()) === -1) {
                return;
            }
            data.push({
                role: role,
                roleId: role.Uuid,
                roleLabel: label,
                isDefault: role.AutoApplies.join(', ') || '-',
                roleSummary: new Date(parseInt(role.LastUpdated)*1000).toISOString()
            });
        });
        return data;
    },

    render(){

        const {muiTheme} = this.props;
        const styles = AdminComponents.AdminStyles(muiTheme.palette);
        const {searchRoleString, showTechnical} = this.state;

        const buttons = [
            <FlatButton {...styles.props.header.flatButton} primary={true} label={this.context.getMessage("user.6")} onClick={this.createRoleAction.bind(this)}/>,
            <IconMenu
                iconButtonElement={<IconButton iconClassName={"mdi mdi-filter-variant"} {...styles.props.header.iconButton}/>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                desktop={true}
                onChange={()=> {this.setState({showTechnical:!showTechnical}, ()=>{this.load();})}}
            >
                <MenuItem primaryText={this.context.getMessage('dashboard.technical.hide', 'role_editor')} value={"hide"} rightIcon={showTechnical ? <FontIcon className={"mdi mdi-check"}/>: null}/>
                <MenuItem primaryText={this.context.getMessage('dashboard.technical.show', 'role_editor')} value={"show"} rightIcon={!showTechnical ? <FontIcon className={"mdi mdi-check"}/> : null}/>
            </IconMenu>
        ];

        const centerContent = (
            <div style={{display:'flex'}}>
                <div style={{flex: 1}}/>
                <div style={{width:190}}>
                    <ModernTextField fullWidth={true} hintText={this.context.getMessage('47', 'role_editor') + '...'} value={searchRoleString || ''} onChange={(e,v) => this.setState({searchRoleString:v}) } />
                </div>
            </div>
        );
        const iconStyle = {
            color: 'rgba(0,0,0,0.3)',
            fontSize: 20
        };
        const columns = [
            {name:'roleLabel', label: this.context.getMessage('32', 'role_editor'), style:{width:'35%', fontSize:15}, headerStyle:{width:'35%'}},
            {name:'roleSummary', label: this.context.getMessage('last_update', 'role_editor'), hideSmall:true},
            {name:'isDefault', label: this.context.getMessage('114', 'settings'), style:{width:'20%'}, headerStyle:{width:'20%'}, hideSmall:true},
            {name:'actions', label:'', style:{width:80, textOverflow:'none'}, headerStyle:{width:80}, renderCell:(row) => {
                if(row.role.PoliciesContextEditable){
                    return <IconButton key="delete" iconClassName="mdi mdi-delete" onTouchTap={() => {this.deleteAction(row.roleId)}} onClick={(e)=>{e.stopPropagation()}} iconStyle={iconStyle} />
                } else {
                    return null;
                }
            }}
        ];
        const data = this.computeTableData(searchRoleString);
        const {body} = AdminComponents.AdminStyles();
        const {tableMaster} = body;
        const blockProps = body.block.props;
        const blockStyle = body.block.container;

        return(

            <div className={"main-layout-nav-to-stack vertical-layout people-dashboard"}>
                <AdminComponents.Header
                    title={this.context.getMessage('69', 'settings')}
                    icon="mdi mdi-account-multiple"
                    actions={buttons}
                    centerContent={centerContent}
                    reloadAction={()=>{this.load()}}
                    loading={this.state.loading}
                />
                <AdminComponents.SubHeader legend={this.context.getMessage("dashboard.description", "role_editor")}/>
                <Paper {...blockProps} style={blockStyle} className={"horizontal-layout layout-fill"}>
                    <MaterialTable
                        data={data}
                        columns={columns}
                        onSelectRows={this.openTableRows.bind(this)}
                        deselectOnClickAway={true}
                        showCheckboxes={false}
                        masterStyles={tableMaster}
                    />
                </Paper>
            </div>


        );


    }

});

RolesDashboard = muiThemeable()(RolesDashboard)
export {RolesDashboard as default}
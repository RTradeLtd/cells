package nats

import (
	"time"

	"github.com/micro/go-micro/client"
	"github.com/micro/go-micro/registry"
	"github.com/micro/go-micro/selector"
	"github.com/micro/go-micro/selector/cache"
	"github.com/micro/go-micro/server"
	"github.com/micro/go-plugins/registry/nats"
	defaults "github.com/pydio/cells/common/micro"
	"github.com/spf13/viper"
)

func Enable() {
	addr := viper.GetString("registry_address")
	r := nats.NewRegistry(
		registry.Addrs(addr),
	)
	q := 1
	if defaults.RuntimeIsCluster() {
		q = 0
	}
	defaults.DefaultStartupRegistry = nats.NewRegistry(
		registry.Addrs(addr),
		registry.Timeout(4*time.Second),
		nats.Quorum(q),
	)

	s := cache.NewSelector(selector.Registry(r))

	defaults.InitServer(func() server.Option {
		return server.Registry(r)
	})

	defaults.InitClient(func() client.Option {
		return client.Selector(s)
	}, func() client.Option {
		return client.Registry(r)
	})

	registry.DefaultRegistry = r

}

// adapted from https://gist.github.com/goatslacker/5f84bf1793cbc7badda3
import React from 'react'
import { Resolver } from 'react-resolver'

function connect(spec, Component = spec) {
  const reduceProps = (props, context) => {
    return spec.reduceProps
      ? spec.reduceProps(props, context)
      : props
  }

  return class extends React.Component {
    constructor(props, context) {
      super(props, context)

      this.state = {
        connections: spec.enhance ? spec.enhance() : [],
        props: reduceProps(props, context),
      }
    }

    componentDidMount() {
      const stores = spec.listenTo(this.props, this.context)
      this.storeListeners = stores.map((store) => {
        return store.listen(this.onChange)
      })

      if (spec.didMount) spec.didMount(this.props, this.context)
    }

    componentWillUnmount() {
      this.storeListeners.forEach(unlisten => unlisten())
    }

    onChange = () => {
      this.setState(reduceProps(this.props, this.context))
    }

    render() {
      const asyncValues = spec.resolveProps(this.props, this.context)
      const asyncProps = Object.keys(asyncValues).reduce((props, prop) => {
        props[prop] = () => asyncValues[prop]
        return props
      }, {})

      const extraProps = this.state.connections.reduce((props, item) => {
        Object.keys(item).forEach(key => props[key] = item[key])
        return props
      }, {})

      return (
        <Resolver props={this.state.props} resolve={asyncProps}>
          {resolved => (
            <Component {...this.state.props} {...resolved} {...extraProps} />
          )}
        </Resolver>
      )
    }
  }
}

export default connect

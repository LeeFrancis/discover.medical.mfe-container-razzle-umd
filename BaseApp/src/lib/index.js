import React, { Component } from 'react';
import { load } from './PreLoading';

function MicroFrontEndLoader(url, moduleName, componentName) {
  class ComponentWrapper extends Component {
    state = {
      DynamicComponent: global[moduleName] && global[moduleName][componentName]
    };
    async componentDidMount() {
      if (!global[moduleName]) {
        load(url, moduleName).then((amdModule) => {
          this.setState({ DynamicComponent: amdModule[componentName] });
        });
      }
      else {
        this.setState({ DynamicComponent: global[moduleName][componentName] });
      }
    }
    render() {
      const { DynamicComponent } = this.state;
      return DynamicComponent ? <DynamicComponent {...this.props} /> : <h1>Loading....</h1>;
    }
  }

  ComponentWrapper.displayName = moduleName;

  return ComponentWrapper;
}

export default MicroFrontEndLoader;
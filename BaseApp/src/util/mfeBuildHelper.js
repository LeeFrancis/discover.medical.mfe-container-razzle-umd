import MicroFrontEndLoader from '../lib'
import MfeRouteConfig from '../../config/MfeRouteConfig';

function mfeBuildHelper(route, componentName) {
  const routeConfig = MfeRouteConfig[route];
  return MicroFrontEndLoader(routeConfig.url, routeConfig.name, componentName)
}

export default mfeBuildHelper;
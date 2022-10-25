import { createStackNavigator } from 'react-navigation';
import Homepage from '../components/Homepage';
const Navigation = createStackNavigator({
  Homepage: { screen: Homepage },

});
export default Navigation;
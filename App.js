import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const screens = {
  Search: SearchScreen
};

const config = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
};

const navigator = createStackNavigator(screens, config);

export default createAppContainer(navigator);

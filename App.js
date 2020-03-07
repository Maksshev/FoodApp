import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShow';

const screens = {
  Search: SearchScreen,
  ResultsShow: ResultsShow
};

const config = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
};

const navigator = createStackNavigator(screens, config);

export default createAppContainer(navigator);

import HomeScreen from '../Containers/HomeScreen';
import BookDetailScreen from '../Containers/BookDetailScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Details: BookDetailScreen,
    },
    {initialRouteName: 'Home'},
  ),
);

export default RootNavigator;

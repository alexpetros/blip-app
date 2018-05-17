import { createBottomTabNavigator } from 'react-navigation';
import Capture from '../components/capture';
import Feed from '../components/feed';


const MainTabBar = createBottomTabNavigator(
  {
    Feed,
    Capture,
  },
  {
    initialRouteName: 'Feed',
  },
);


export default MainTabBar;

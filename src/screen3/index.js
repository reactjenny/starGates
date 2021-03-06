import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import StargateHomeScreen from '../screen1/HomeScreen'
import {
  SPIDER_HOME,
  SPIDER_DETAILS,
  STARGATE_HOME
} from '../routes'

export default createStackNavigator (
  {
    [SPIDER_HOME]: HomeScreen,
    [SPIDER_DETAILS]: DetailsScreen,
    [STARGATE_HOME]: StargateHomeScreen
  },
  {
    headerMode: 'none'
  }
)

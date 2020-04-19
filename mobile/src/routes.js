import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Delivery from './pages/Delivery';
import Problem from './pages/Problem';
import ProblemList from './pages/ProblemList';
import DeliveryConfirm from './pages/DeliveryConfirm';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFFFFF',
              },
            },
          }
        ),
        Delivery,
        Problem,
        ProblemList,
        DeliveryConfirm,
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

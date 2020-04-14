import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
}
/* import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
  }),
); */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import DetailClient from '../pages/DetailClient';
const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#4169b3'},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />

  </Auth.Navigator>
);

export default AuthRoutes;

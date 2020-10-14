import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      //headerTintColor: '#fff',
      //headerStyle: {
      // backgroundColor: '#3d9be9',
      //},
      cardStyle: {backgroundColor: '#4169b3'},
    }}>
    <Auth.Screen name="WaterPlus" component={Login} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
  </Auth.Navigator>
);

export default Routes;

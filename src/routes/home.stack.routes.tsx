import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const HomeStack = createStackNavigator();

const HomeStackRoutes: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      title: "HomePage",
      headerShown: true,
      headerTintColor:'#fff',
      headerStyle : {
        backgroundColor: "#3d9be9",
      },
    }}
    >
    <HomeStack.Screen name="Home" component={Home} />

  </HomeStack.Navigator>
);

export default HomeStackRoutes;

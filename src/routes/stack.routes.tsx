import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClientCreated from '../pages/ClientCreated';
import DetailClient from '../pages/DetailClient';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ClientCreated" component={ClientCreated} />
    <Stack.Screen name="DetailClient" component={DetailClient} />

  </Stack.Navigator>
);

export default StackRoutes;

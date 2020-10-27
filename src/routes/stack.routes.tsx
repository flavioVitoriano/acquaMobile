import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StackPage from '../pages/StackPage';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="StackPage"  component={StackPage} />

  </Stack.Navigator>
);

export default StackRoutes;

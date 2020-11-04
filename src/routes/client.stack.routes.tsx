import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClientCreated from '../pages/ClientCreated';
import DetailClient from '../pages/DetailClient';

const ClientStack = createStackNavigator();

const ClientStackRoutes: React.FC = () => (
  <ClientStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ClientStack.Screen name="ClientCreated" component={ClientCreated} />
    <ClientStack.Screen name="DetailClient" component={DetailClient} />

  </ClientStack.Navigator>
);

export default ClientStackRoutes;

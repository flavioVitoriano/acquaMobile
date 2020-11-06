import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreatedClientRoute from '../pages/CreatedClientRoute';
import DetailClientRoute from '../pages/DetailClientRoute';

const ClientRouteStack = createStackNavigator();

const ClientRouteStackCreatedClientRoutes: React.FC = () => (
  <ClientRouteStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ClientRouteStack.Screen name="CreatedClientRoute" component={CreatedClientRoute} />
    <ClientRouteStack.Screen name="DetailClientRoute" component={DetailClientRoute} />

  </ClientRouteStack.Navigator>
);

export default ClientRouteStackCreatedClientRoutes;

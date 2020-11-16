import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeClient from '../pages/HomeClient';
import ClientCreate from '../pages/ClientCreate';
import ClientCreated from '../pages/ClientCreated';
import ClientDetail from '../pages/ClientDetail';

const ClientStack = createStackNavigator();

const ClientStackRoutes: React.FC = () => (
  <ClientStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: "#3d9be9",
      },
    }}
  >
    <ClientStack.Screen name="Clientes" component={HomeClient} />

    <ClientStack.Screen
      name="ClientCreate"
      component={ClientCreate}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,

      }}
    />

    <ClientStack.Screen
      name="ClientCreated"
      component={ClientCreated}
      options={{
        title: "Clientes Registrados",
        headerBackTitleVisible: false,
      }}
    />

    <ClientStack.Screen
      name="ClientDetail"
      component={ClientDetail}
      options={{
        headerShown: false,
      }}
    />

  </ClientStack.Navigator>
);

export default ClientStackRoutes;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ClientHome from '../pages/HomeClient';
import CreateClient from '../pages/CreateClient';
import ClientCreated from '../pages/ClientCreated';
import DetailClient from '../pages/DetailClient';

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
    <ClientStack.Screen name="Clientes" component={ClientHome} />

    <ClientStack.Screen
      name="CreateClient"
      component={CreateClient}
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
      name="DetailClient"
      component={DetailClient}
      options={{
        headerShown: false,
      }}
    />

  </ClientStack.Navigator>
);

export default ClientStackRoutes;

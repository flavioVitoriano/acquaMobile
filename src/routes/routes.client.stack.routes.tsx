import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeClientRoute from '../pages/HomeClientRoute'
import CreateRouteClient from '../pages/ClientRouteCreate';
import CreatedRouteClient from '../pages/ClientRouteCreated';
import ClientRouteDetail from '../pages/ClientRouteDetail';

const ClientRouteStack = createStackNavigator();

const ClientRouteStackRoutes: React.FC = () => (
  <ClientRouteStack.Navigator
  screenOptions={{
    headerShown: true,
    headerTintColor:'#fff',

    headerStyle : {
      backgroundColor: "#3d9be9",

    },
  }}
  >
    <ClientRouteStack.Screen name="Rota de Clientes" component={HomeClientRoute} />
    <ClientRouteStack.Screen options={{headerShown: false}} name="CreateRouteClient" component={CreateRouteClient} />
    <ClientRouteStack.Screen options={{title:"Rotas Registradas"}} name="CreatedRouteClient" component={CreatedRouteClient} />
    <ClientRouteStack.Screen options={{headerShown: false}} name="ClientRouteDetail" component={ClientRouteDetail} />

  </ClientRouteStack.Navigator>
);

export default ClientRouteStackRoutes;

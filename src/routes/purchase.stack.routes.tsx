import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePurchase from '../pages/HomePurchase'
import CreatePurchase from "../pages/CreatePurchase";
import CreatedPurchase from '../pages/CreatedPurchase';
import DetailPurchase from '../pages/DetailPurchase';

const PurchaseStack = createStackNavigator();

const PurchaseStackRoutes: React.FC = () => (
  <PurchaseStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#fff',

      headerStyle: {
        backgroundColor: "#3d9be9",

      },
    }}
  >
    <PurchaseStack.Screen name="Compras" component={HomePurchase} />

    <PurchaseStack.Screen
      name="CreatePurchase"
      component={CreatePurchase}
      options={{
        headerShown: false,
      }}
    />
    <PurchaseStack.Screen
    name="CreatedPurchase"
     component={CreatedPurchase}
     options={{title: "Compras Registradas"}}
     />

    <PurchaseStack.Screen
      name="DetailPurchase"
      component={DetailPurchase}
      options={{
        headerShown: false,
      }}
      />

  </PurchaseStack.Navigator>
);

export default PurchaseStackRoutes;

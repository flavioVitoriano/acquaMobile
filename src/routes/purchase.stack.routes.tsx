import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePurchase from '../pages/HomePurchase'
import PurchaseCreate from "../pages/PurchaseCreate";
import PurchaseCreated from '../pages/PurchaseCreated';
import PurchaseDetail from '../pages/PurchaseDetail';

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
      name="PurchaseCreate"
      component={PurchaseCreate}
      options={{
        headerShown: false,
      }}
    />
    <PurchaseStack.Screen
    name="PurchaseCreated"
     component={PurchaseCreated}
     options={{title: "Compras Registradas"}}
     />

    <PurchaseStack.Screen
      name="PurchaseDetail"
      component={PurchaseDetail}
      options={{
        headerShown: false,
      }}
      />

  </PurchaseStack.Navigator>
);

export default PurchaseStackRoutes;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PurchaseCreated from '../pages/PurchaseCreated';
import DetailPurchase from '../pages/DetailPurchase';

const PurchaseStack = createStackNavigator();

const PurchaseStackRoutes: React.FC = () => (
  <PurchaseStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <PurchaseStack.Screen name="PurchaseCreated" component={PurchaseCreated} />
    <PurchaseStack.Screen name="DetailPurchase" component={DetailPurchase} />

  </PurchaseStack.Navigator>
);

export default PurchaseStackRoutes;

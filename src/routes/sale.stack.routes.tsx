import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Sales from '../pages/SaleCreated';
import DetailSale from '../pages/DetailSale';

const SaleStack = createStackNavigator();

const SaleStackRoutes: React.FC = () => (
  <SaleStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <SaleStack.Screen name="Sales" component={Sales} />
    <SaleStack.Screen name="DetailSale" component={DetailSale} />

  </SaleStack.Navigator>
);

export default SaleStackRoutes;

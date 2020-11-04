import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Shopping from '../pages/Shopping';
import DetailShopping from '../pages/DetailShopping';

const ShoppingStack = createStackNavigator();

const ShoppingStackRoutes: React.FC = () => (
  <ShoppingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ShoppingStack.Screen name="Shopping" component={Shopping} />
    <ShoppingStack.Screen name="DetailShopping" component={DetailShopping} />

  </ShoppingStack.Navigator>
);

export default ShoppingStackRoutes;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeSale from '../pages/HomeSale'
import SaleCreate from '../pages/SaleCreate'
import SaleCreated from '../pages/SaleCreated';
import SaleDetail from '../pages/SaleDetail';

const SaleStack = createStackNavigator();

const SaleStackRoutes: React.FC = () => (
  <SaleStack.Navigator
  screenOptions={{
    headerShown: true,
    headerTintColor:'#fff',

    headerStyle : {
      backgroundColor: "#3d9be9",

    },
  }}
  >
    <SaleStack.Screen name="Vendas" component={HomeSale} />
    <SaleStack.Screen options={{headerShown: false}} name="SaleCreate" component={SaleCreate} />
    <SaleStack.Screen options={{title:"Vendas Registradas"}} name="SaleCreated" component={SaleCreated} />
    <SaleStack.Screen options={{headerShown: false}} name="SaleDetail" component={SaleDetail} />

  </SaleStack.Navigator>
);

export default SaleStackRoutes;

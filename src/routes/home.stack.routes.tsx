import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import ReportsRoutes from '../pages/ReportsRoutes';
import ProfitReport from '../pages/ProfitReport';


const HomeStack = createStackNavigator();

const HomeStackRoutes: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor:'#fff',

      headerStyle : {
        backgroundColor: "#3d9be9",

      },
    }}
    >
    <HomeStack.Screen  name="Home🏠" component={Home} />
    <HomeStack.Screen options={{
      title: "Relatório de Rotas 🚀",
      headerBackTitleVisible:false,
    }}
    name="ReportsRoutes" component={ReportsRoutes} />

<HomeStack.Screen options={{
      title: "Relatório de Lucros 📶",
      headerBackTitleVisible:false,
    }}
    name="ProfitReport" component={ProfitReport} />


  </HomeStack.Navigator>
);

export default HomeStackRoutes;

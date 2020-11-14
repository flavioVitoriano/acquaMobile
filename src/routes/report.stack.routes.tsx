import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeReports from '../pages/HomeReports';
import ReportsRoutes from '../pages/ReportsRoutes';
import ReportsProfit from '../pages/ReportsProfit';


const ReportStack = createStackNavigator();

const ReportStackRoutes: React.FC = () => (
  <ReportStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#fff',

      headerStyle: {
        backgroundColor: "#3d9be9",

      },
    }}
  >
    <ReportStack.Screen name="Relatórios" component={HomeReports} />
    <ReportStack.Screen options={{
      title: "Relatório de Rotas 🚀",
      headerBackTitleVisible: false,
    }}
      name="ReportsRoutes" component={ReportsRoutes} />

    <ReportStack.Screen options={{
      title: "Relatório de Lucros 📶",
      headerBackTitleVisible: false,
    }}
      name="ReportsProfit" component={ReportsProfit} />


  </ReportStack.Navigator>
);

export default ReportStackRoutes;

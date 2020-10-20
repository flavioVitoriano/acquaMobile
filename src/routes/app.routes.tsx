import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";
import { Text } from "react-native";

import Client from "../pages/Client";
import Shopping from "../pages/Shopping";
import Sales from "../pages/Sales";
import CarboyLoans from "../pages/CarboyLoans";
import Reports from "../pages/Reports";
import RoutesClients from "../pages/RoutesClients";
import Expenses from "../pages/Expenses";
import Inputs from "../pages/Inputs";
import HomePage from "../pages/HomePage";

const Drawer = createDrawerNavigator();

const DrawerNavgation: React.FC = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: "#313131",
      paddingVertical: 20,
    }}
    drawerContentOptions={{
      activeBackgroundColor: "#fff",
      inactiveTintColor: "#FFF",
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomePage}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Home</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="home" />
        ),
      }}
    />

    <Drawer.Screen
      name="Client"
      component={Client}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Cliente</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="user" />
        ),
      }}
    />

    <Drawer.Screen
      name="Shopping"
      component={Shopping}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Compras</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-cart" />
        ),
      }}
    />

    <Drawer.Screen
      name="Sales"
      component={Sales}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Vendas</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-bag" />
        ),
      }}
    />

    <Drawer.Screen
      name="CarboyLoans"
      component={CarboyLoans}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Empréstimos de garrafões
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="calendar" />
        ),
      }}
    />

    <Drawer.Screen
      name="Reports"
      component={Reports}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Relatórios
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="file" />
        ),
      }}
    />

    <Drawer.Screen
      name="RoutesClients"
      component={RoutesClients}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Rotas de Clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="crop" />
        ),
      }}
    />

    <Drawer.Screen
      name="Expenses"
      component={Expenses}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Despesas</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="align-left" />
        ),
      }}
    />

    <Drawer.Screen
      name="Inputs"
      component={Inputs}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Entradas</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="log-in" />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavgation;

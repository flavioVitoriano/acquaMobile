import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "react-native";

import Client from "../pages/Client";
import StackRoutes from "./stack.routes";

import Shopping from "../pages/Shopping";
import Sales from "../pages/Sales";
import CarboyLoans from "../pages/CarboyLoans";
import Reports from "../pages/Reports";
import RoutesClients from "../pages/RoutesClients";
import SignOut from "../pages/SignOut";
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
      name="Client"
      component={Client}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Cadastrar cliente
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="user-plus" />
        ),
      }}
    />

    <Drawer.Screen
      name="StackRoutes"
      component={StackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Ver clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="users" />
        ),
      }}
    />

    <Drawer.Screen
      name="Shopping"
      component={Shopping}
      options={{
        unmountOnBlur: true,
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
        unmountOnBlur: true,
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
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Empréstimo de garrafão
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="share-2" />
        ),
      }}
    />

    <Drawer.Screen
      name="Reports"
      component={Reports}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Relatórios
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="folder" />
        ),
      }}
    />

    <Drawer.Screen
      name="RoutesClients"
      component={RoutesClients}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Rota de Clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="truck" />
        ),
      }}
    />

    <Drawer.Screen
      name="SignOut"
      component={SignOut}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Sair</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="log-out" />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavgation;

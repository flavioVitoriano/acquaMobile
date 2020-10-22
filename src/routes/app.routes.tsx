import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";
import { Text } from "react-native";

import Client from "../pages/Client";
import ClientCreated from "../pages/ClientCreated";

import Shopping from "../pages/Shopping";
import Sales from "../pages/Sales";
import CarboyLoans from "../pages/CarboyLoans";
import Reports from "../pages/Reports";
import RoutesClients from "../pages/RoutesClients";
import Expenses from "../pages/Expenses";
import Inputs from "../pages/Inputs";
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
            Cadastrar Clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="user-plus" />
        ),
      }}
    />

    <Drawer.Screen
      name="ClientCreated"
      component={ClientCreated}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Clientes Cadastrados
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
            empréstimo de garrafão
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
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            relatorios
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
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Rotas de Clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="truck" />
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

    <Drawer.Screen
      name="SignOut"
      component={SignOut}
      options={{
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

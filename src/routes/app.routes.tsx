import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "react-native";

import HomeStackRoutes from './home.stack.routes'
import ClientStackRoutes from "./client.stack.routes";
import PurchaseStackRoutes from "./purchase.stack.routes";
import SaleStackRoutes from "./sale.stack.routes";
import CarboyLoanStackRoutes from "./carboyLoan.stack.routes";
import MoveStackRoutes from "./move.stack.routes";

import ClientRouteStackCreatedClientRoutes from "./routes.client.stack.routes";

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
      name="HomeStackRoutes"
      component={HomeStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Home
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="home" />
        ),
      }}
    />

    <Drawer.Screen
      name="ClientStackRoutes"
      component={ClientStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="users" />
        ),
      }}
    />

    <Drawer.Screen
      name="PurchaseStackRoutes"
      component={PurchaseStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Compras
            </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-cart"/>
        ),
      }}
    />

    <Drawer.Screen
      name="SaleStackRoutes"
      component={SaleStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Vendas
            </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-bag" />
        ),
      }}
    />


    <Drawer.Screen
      name="CarboyLoanStackRoutes"
      component={CarboyLoanStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Empréstimos
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="share-2" />
        ),
      }}
    />

    <Drawer.Screen
      name="MoveStackRoutes"
      component={MoveStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Movimentos
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="repeat" />
        ),
      }}
    />

    <Drawer.Screen
      name="ClientRouteStackCreatedClientRoutes"
      component={ClientRouteStackCreatedClientRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Rotas
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

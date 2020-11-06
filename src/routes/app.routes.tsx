import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "react-native";

import CreateClient from "../pages/CreateClient";
import ClientStackRoutes from "./client.stack.routes";

import CreatePurchase from "../pages/CreatePurchase";
import ShoppingStackRoutes from "./purchase.stack.routes";

import CreateSale from '../pages/CreateSale'
import SaleStackRoutes from "./sale.stack.routes";

import CreateCarboyLoan from "../pages/CreateCarboyLoan";
import CarboyLoanStackRoutes from "./carboyLoan.stack.routes";

import CreateMove from "../pages/CreateMove";
import MoveStackRoutes from "./move.stack.routes";

import CreateClientRoute from "../pages/CreateClientRoute";
import ClientRouteStackCreatedClientRoutes from "./routes.client.stack.routes";

import HomeStackRoutes from './home.stack.routes'
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
      name="CreateClient"
      component={CreateClient}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Registrar cliente
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="user-plus" />
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
            Ver clientes
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="users" />
        ),
      }}
    />

    <Drawer.Screen
      name="CreatePurchase"
      component={CreatePurchase}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Registrar compra
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-cart" />
        ),
      }}
    />

    <Drawer.Screen
      name="ShoppingStackRoutes"
      component={ShoppingStackRoutes}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Compras
            </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="dollar-sign"/>
        ),
      }}
    />

<Drawer.Screen
      name="CreateSale"
      component={CreateSale}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Registrar Vendas
            </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="shopping-bag" />
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
      name="CreateCarboyLoan"
      component={CreateCarboyLoan}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Registrar Empréstimo
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="plus-square" />
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
      name="CreateMove"
      component={CreateMove}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Registrar movimento
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="refresh-ccw" />
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
      name="CreateClientRoute"
      component={CreateClientRoute}
      options={{
        unmountOnBlur: true,
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>
            Cadastrar rota
          </Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="map" />
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

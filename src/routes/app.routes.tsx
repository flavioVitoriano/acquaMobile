import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavgation: React.FC = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#313131',
      paddingVertical: 20,
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#fff',
      inactiveTintColor: '#FFF',
    }}>
    <Drawer.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        drawerLabel: ({focused}) => (
          <Text style={{color: focused ? '#313131' : '#fff'}}>Perfil</Text>
        ),
        drawerIcon: ({focused}) => (
          <Icon color={focused ? '#313131' : '#fff'} name="user" />
        ),
      }}
    />

    <Drawer.Screen
      name="Contact"
      component={Contact}
      options={{
        drawerLabel: ({focused}) => (
          <Text style={{color: focused ? '#313131' : '#fff'}}>
            mais informações
          </Text>
        ),
        drawerIcon: ({focused}) => (
          <Icon color={focused ? '#313131' : '#fff'} name="home" />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavgation;

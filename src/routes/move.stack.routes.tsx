import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeMove from '../pages/HomeMove'
import MoveCreate from '../pages/MoveCreate'
import MoveCreated from '../pages/MoveCreated';
import MoveDetail from '../pages/MoveDetail';

const MoveStack = createStackNavigator();

const MoveStackRoutes: React.FC = () => (
  <MoveStack.Navigator
  screenOptions={{
    headerShown: true,
    headerTintColor:'#fff',

    headerStyle : {
      backgroundColor: "#3d9be9",

    },
  }}
  >
   <MoveStack.Screen name="Movimentos" component={HomeMove} />
    <MoveStack.Screen options={{headerShown: false}} name="MoveCreate" component={MoveCreate} />
    <MoveStack.Screen options={{title:"Movimentos Registrados"}} name="MoveCreated" component={MoveCreated} />
    <MoveStack.Screen options={{headerShown: false}} name="MoveDetail" component={MoveDetail} />


  </MoveStack.Navigator>
);

export default MoveStackRoutes;

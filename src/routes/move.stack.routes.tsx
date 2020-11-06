import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreatedMove from '../pages/CreatedMove';
import DetailMove from '../pages/DetailMove';

const MoveStack = createStackNavigator();

const MoveStackRoutes: React.FC = () => (
  <MoveStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <MoveStack.Screen name="CreatedMove" component={CreatedMove} />
    <MoveStack.Screen name="DetailMove" component={DetailMove} />

  </MoveStack.Navigator>
);

export default MoveStackRoutes;

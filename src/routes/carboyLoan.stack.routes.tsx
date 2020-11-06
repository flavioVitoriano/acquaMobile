import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreatedCarboyLoan from '../pages/CreatedCarboyLoan';
import DetailCarboyLoan from '../pages/DetailCarboyLoan';

const CarboyLoanStack = createStackNavigator();

const CarboyLoanStackRoutes: React.FC = () => (
  <CarboyLoanStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <CarboyLoanStack.Screen name="CreatedCarboyLoan" component={CreatedCarboyLoan} />
    <CarboyLoanStack.Screen name="DetailCarboyLoan" component={DetailCarboyLoan} />

  </CarboyLoanStack.Navigator>
);

export default CarboyLoanStackRoutes;

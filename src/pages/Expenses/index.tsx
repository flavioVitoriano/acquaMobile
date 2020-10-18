import React from 'react';
import {View, Button} from 'react-native';

import {useAuth} from '../../hooks/auth';

const Expenses: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Expenses" onPress={signOut} />
    </View>
  );
};
export default Expenses;

import React from 'react';
import {View, Button} from 'react-native';

import {useAuth} from '../../hooks/auth';

const ClientCreated: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="ClientCreated" onPress={signOut} />
    </View>
  );
};
export default ClientCreated;

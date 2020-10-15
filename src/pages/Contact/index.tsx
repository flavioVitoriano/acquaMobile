import React from 'react';
import {View, Button} from 'react-native';

import {useAuth} from '../../hooks/auth';

const Contact: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Contact" onPress={signOut} />
    </View>
  );
};
export default Contact;

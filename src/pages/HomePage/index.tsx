import React from "react";
import { View, Button, Text } from "react-native";

//import {useAuth} from '../../hooks/auth';

const HomePage: React.FC = () => {
  //  const {signOut} = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página home</Text>
    </View>
  );
};
export default HomePage;

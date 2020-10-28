import styled from 'styled-components/native';
import {Platform} from 'react-native';
//15c3d6 ,41aef4,3d9be9,15B6D6

export const Container= styled.SafeAreaView`
  margin: 20px;
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  `;

export const Clients = styled.View`
padding: 24px;
border-radius: 8px;
background-color: #fff;
margin-bottom: 16px;
margin-top: 48px;
`;

export const ClientsProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-family: 'RobotoSlab-Medium';
  margin-top: 24px;
`;
export const ClientsValue= styled.Text`
    margin-top: 8px;
    font-size: 15px;
    font-family: 'RobotoSlab-Medium';
    color: #737380;
  `;
export const ContactBox= styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #FFF;
  margin-bottom: 16px;
`;

export const ClientTitle= styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const ClientDescription= styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
  font-family: 'RobotoSlab-Medium';

`;

export const Actions= styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const ActionText= styled.Text`
  color: #FFF;
  font-size: 15px;
  font-family: 'RobotoSlab-Medium';
`;







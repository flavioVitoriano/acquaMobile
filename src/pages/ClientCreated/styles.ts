import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface ClientData {
  id: number;
  full_name: string;
  phone: string;
  preferred_price: number;
  city: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
font-size: 15px;
color: #737373;
`

export const Description = styled.Text`
font-size: 16px;
line-height:24px;
color: #737373;
;`

export const ClientList = styled(FlatList as new () => FlatList<ClientData>)`
margin-top:32px;
`;

export const Client = styled.View`
padding: 24px;
border-radius:8px;
background-color: #FFF;
margin-bottom: 16px;
`;

export const ClientProperty = styled.Text`
font-size: 14px;
color: #4169b3;
font-weight: bold;
`;

export const ClientValue = styled.Text`
margin-top: 8px;
font-size: 15px;
margin-bottom: 24px;
color: #737373;
`;

export const DetailsButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const DetailsButtonText = styled.Text`
color: #e02041;
font-size:15px;
font-weight:bold
`;

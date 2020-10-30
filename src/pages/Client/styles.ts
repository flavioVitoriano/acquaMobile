import styled from 'styled-components/native';
import {Platform} from 'react-native';
//15c3d6 ,41aef4,3d9be9,15B6D6
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3d9be9;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;



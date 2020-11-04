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

export const ErrorValue = styled.Text`
background-color: #f00;
color: #fff;
font-size: 16px;
width: 100%;

`;
export const ContainerRemoteButtonText = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #eee;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #000;

  flex-direction: row;
  align-items: center;

`;

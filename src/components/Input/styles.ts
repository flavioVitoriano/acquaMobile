import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
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

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f00;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #00f;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

import { Platform, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  margin: 0;
  height: 155px;
  background: #7d40e7;
  flex-direction: row;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;
export const HeaderButton = styled.View`
  justify-content: center;
  padding: 10px;
  height: 50px;
  margin-top: -5px;
`;

export const HeaderTitle = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-right: 50px;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : 'none',
})`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const ProblemDetail = styled.View`
  position: relative;
  background: #fff box-shadow;
  margin-top: -100px;
  min-height: 300px;
  max-height: 400px;
  border: solid 1px #0000001a;
  border-radius: 4px;
`;

export const FormInput = styled(TextInput)`
  border: solid 1px #0000001a;
  color: red;
  font-size: 16px;
  border-radius: 4px;

  margin-top: -100px;
  background: #fff box-shadow;
  padding: 20px;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;

export const ButtonText = styled.Text`
  margin-top: 20px;
  height: 45px;
  font-size: 16px;
  color: #fff;
  background: #7d40e7;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

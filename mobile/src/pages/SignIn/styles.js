import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : 'none',
})`
  background: #7d40e7;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  margin-top: 5px;
  background: #82bf18;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 45px;
  text-align: center;
  padding: 10px;
`;

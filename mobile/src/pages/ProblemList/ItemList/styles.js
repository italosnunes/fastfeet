import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View``;

export const Problem = styled.View`
  background: #fff;
  height: 55.5px;
  border: 1px solid #0000001a;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15.58px;
  border-radius: 4px;
`;

export const Detail = styled.Text`
  margin-left: 5px;
  padding: 5px;

  color: #999999;
  font-size: 16px;
  max-width: 200px;
  height: 60px;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
  margin-right: 11px;
`;

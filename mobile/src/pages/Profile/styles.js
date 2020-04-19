import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 40px 0;
`;

export const Avatar = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  background: #f4effc;
`;

export const AvatarText = styled.Text`
  color: #a28fd0;
  font-size: 60px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Input = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  background: #e74040;
  border-radius: 4px;
  margin-top: 30px;
  padding-top: 15px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;

  text-align: center;
`;

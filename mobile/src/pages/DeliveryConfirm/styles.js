import styled from 'styled-components/native';

export const Header = styled.View`
  margin: 0;
  height: 155px;
  background: #7d40e7;
  flex-direction: row;
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
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Detail = styled.View`
  position: relative;
  background: #fff box-shadow;
  margin-top: -100px;
  height: 444px;
  border: solid 1px #0000001a;
  border-radius: 4px;
`;

export const Input = styled.Text`
  color: #999999;
  font-size: 16px;
  margin-bottom: 15px;
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
`;

export const ButtonCamera = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

export const Signature = styled.Image`
  height: 444px;

  background: #f4effc;
`;

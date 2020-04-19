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

export const DeliveryDetail = styled.View`
  position: relative;
  background: #fff box-shadow;
  margin-top: -100px;
  height: 220px;
  border: solid 1px #0000001a;
  border-radius: 4px;
`;

export const SituationDetail = styled.View`
  margin-top: 10px;
  background: #fff box-shadow;
  height: 160px;
  border: solid 1px #0000001a;
  border-radius: 4px;
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-left: 15px;
  align-items: center;
`;

export const HeaderDetailTitle = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Detail = styled.View`
  padding-left: 15px;
`;

export const Label = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Input = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Dates = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Initial = styled.View``;

export const End = styled.View`
  margin-right: 30px;
`;

export const Footer = styled.View`
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  background: #f8f9fd box-shadow;
  height: 83px;
  border: solid 1px #0000001a;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const FooterDivisor = styled.View`
  height: 83px;
  width: 1px;
  background: #0000001a;
`;

export const ButtonContext = styled.View`
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #999999;
  text-align: center;
  width: 60px;
`;

export const Grid = styled.View`
  height: 83px;
  justify-content: center;
`;

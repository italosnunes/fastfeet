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

export const DeliveryTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height: 82px;
  margin-top: -80px;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  position: relative;
  background: transparent;
  margin-top: -70px;
`;

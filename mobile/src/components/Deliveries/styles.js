import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  border: solid 1px #0000001a;
  border-radius: 4px;
  margin-bottom: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-bottom: 19px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #7d40e7;
  font-weight: bold;
  font-size: 14px;
`;

export const Line = styled.View`
  position: absolute;
  margin-top: 74px;
  margin-left: 45px;
  height: 1px;
  width: 240px;
  background: #7d40e7;
`;

export const MenuStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const StatusTable = styled.View`
  height: 14px;
  width: 60px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.finish ? '#7d40e7' : '#fff')};
  border-radius: 5px;
  border: 1px solid #7d40e7;
`;

export const StatusDescription = styled.Text`
  width: 60px;
  height: 22px;
  margin-top: 10px;
  font-size: 8px;
  text-align: center;
  color: #999999;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f8f9fd;
  padding: 20px;
`;

export const FooterItem = styled.View`
  flex-direction: column;
  justify-content: center;
`;
export const Label = styled.Text`
  color: #999999;
  font-size: 8px;
`;

export const Date = styled.Text`
  font-weight: bold;
`;

export const City = styled.Text`
  font-weight: bold;
`;

export const ButtonDetails = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
`;

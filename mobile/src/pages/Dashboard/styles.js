import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDetails = styled.View`
  justify-content: space-between;
  flex-direction: row;

  svg {
    position: absolute;
    margin-top: 50px;
  }
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #f4effc;
`;

export const Description = styled.View`
  flex-direction: column;
  margin-left: -30px;
`;
export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const UserName = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled.View`
  margin-right: 20px;
`;

export const Menu = styled.View`
  height: 50px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const Op = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => (props.primaryColor ? '#7d40e7' : '#999999')};
  text-decoration: ${(props) => (props.primaryColor ? 'underline' : 'none')};
  height: 30px;

  padding: 5px;
  margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  margin-top: -20px;
`;

//

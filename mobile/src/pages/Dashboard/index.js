/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { signOut } from '../../store/modules/auth/actions';
import {
  Container,
  Header,
  HeaderDetails,
  Avatar,
  Description,
  Welcome,
  UserName,
  LogoutButton,
  Menu,
  MenuItem,
  Title,
  Op,
  List,
} from './styles';

import Deliveries from '../../components/Deliveries';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const [pending, setPending] = useState(true);
  const [delivered, setDelivered] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = delivered
        ? await api.get(`deliveryman/${profile.id}/deliveries?delivered=true`)
        : await api.get(`deliveryman/${profile.id}/deliveries`);
      setDeliveries(response.data.order);
    }

    loadDeliveries();
  }, [profile.id, delivered, pending]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handlePending() {
    setPending(true);
    setDelivered(false);
    console.tron.log('handle pending');
  }

  function handleDelivered() {
    setPending(false);
    setDelivered(true);
    console.tron.log('handle delivered');
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : `https://api.adorable.io/avatar/50/${profile.name}.png`,
          }}
        />
        <HeaderDetails>
          <Description>
            <Welcome>Bem vindo de volta,</Welcome>
            <UserName>{profile.name}</UserName>
          </Description>
        </HeaderDetails>
        <LogoutButton>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="exit-to-app" size={30} color="#E74040" />
          </TouchableOpacity>
        </LogoutButton>
      </Header>
      <Menu>
        <MenuItem>
          <Title>Entregas</Title>
        </MenuItem>
        <MenuItem>
          <TouchableOpacity onPress={handlePending}>
            <Op primaryColor={pending}>Pendentes</Op>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDelivered}>
            <Op primaryColor={delivered}>Entregues</Op>
          </TouchableOpacity>
        </MenuItem>
      </Menu>
      <List
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Deliveries data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};

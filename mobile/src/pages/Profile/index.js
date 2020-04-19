import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  AvatarText,
  Label,
  Input,
  ButtonText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const [name] = useState(profile.name);
  const [email] = useState(profile.email);
  const [created_at] = useState(profile.created_at);

  const dateCreate = format(parseISO(created_at), 'dd/MM/yyyy', { locale: pt });

  function handleLogout() {
    dispatch(signOut());
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
      </Header>
      <Label>Nome Completo</Label>
      <Input>{name}</Input>
      <Label>E-mail</Label>
      <Input>{email}</Input>
      <Label>Data de Cadastro</Label>
      <Input>{dateCreate}</Input>

      <TouchableOpacity onPress={handleLogout}>
        <ButtonText>Logout</ButtonText>
      </TouchableOpacity>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};

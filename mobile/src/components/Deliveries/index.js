import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Title,
  Line,
  MenuStatus,
  StatusTable,
  Status,
  StatusDescription,
  Footer,
  FooterItem,
  Label,
  Date,
  City,
  ButtonDetails,
} from './styles';

import {
  deliveryDetail,
  deliveryExit,
} from '../../store/modules/delivery/actions';

export default function Deliveries({ data, navigation }) {
  const dispatch = useDispatch();
  const delivery = data;
  const dateStart = useMemo(() => {
    return data.created_at
      ? format(parseISO(data.created_at), 'dd/MM/yyyy', { locale: pt })
      : '';
  }, [data.created_at]);

  const statusRetirada = useMemo(() => {
    if (data.status === 'RETIRADA' || data.status === 'ENTREGUE') {
      return true;
    }
    return false;
  }, [data.status]);

  const statusEntregue = useMemo(() => {
    if (data.status === 'ENTREGUE') {
      return true;
    }
    return false;
  }, [data.status]);

  function handleDetails() {
    dispatch(deliveryDetail(delivery));
    navigation.navigate('Delivery');
  }

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={24} color="#7d40e7" />
        <Title>{data.product}</Title>
      </Header>
      <Line />
      <MenuStatus>
        <StatusTable>
          <Status finish />
          <StatusDescription>Aguardando Retirada</StatusDescription>
        </StatusTable>
        <StatusTable>
          <Status finish={statusRetirada} />
          <StatusDescription>Retirada</StatusDescription>
        </StatusTable>
        <StatusTable>
          <Status finish={statusEntregue} />
          <StatusDescription>Entregue</StatusDescription>
        </StatusTable>
      </MenuStatus>
      <Footer>
        <FooterItem>
          <Label>Data</Label>
          <Date>{dateStart}</Date>
        </FooterItem>

        <FooterItem>
          <Label>Cidade</Label>
          <City>{data.recipient.city}</City>
        </FooterItem>

        <FooterItem>
          <TouchableOpacity onPress={handleDetails}>
            <ButtonDetails>Ver detalhes</ButtonDetails>
          </TouchableOpacity>
        </FooterItem>
      </Footer>
    </Container>
  );
}

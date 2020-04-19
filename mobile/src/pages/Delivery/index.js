import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { deliveryExit } from '../../store/modules/delivery/actions';

import {
  Container,
  Header,
  HeaderButton,
  HeaderTitle,
  DeliveryDetail,
  HeaderDetail,
  HeaderDetailTitle,
  Detail,
  SituationDetail,
  Label,
  Input,
  Dates,
  Initial,
  End,
  Footer,
  FooterDivisor,
  ButtonText,
  ButtonContext,
  Grid,
} from './styles';

export default function Delivery({ navigation }) {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.delivery.delivery);

  const startDate = delivery.start_date
    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', {
        locale: pt,
      })
    : '--/--/----';

  const endDate = delivery.end_date
    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', {
        locale: pt,
      })
    : '--/--/----';

  function handleDeliveryClear() {
    dispatch(deliveryExit());
    navigation.navigate('Dashboard');
  }

  function handleNewProblem() {
    if (!delivery.start_date) {
      Alert.alert(
        'Fastfeet',
        'Para cadastrar problema, é necessário confirmar retirada.'
      );
      return;
    }
    navigation.navigate('Problem');
  }

  function handleViewProblemas() {
    if (!delivery.start_date) {
      Alert.alert(
        'Fastfeet',
        'Para visualizar os problemas com entrega, é necessário confirmar retirada.'
      );
      return;
    }
    navigation.navigate('ProblemList');
  }

  function handleConfirmDelivery() {
    if (!delivery.start_date) {
      Alert.alert(
        'Fastfeet',
        'Para confirmar entrega, é necessário confirmar retirada.'
      );
      return;
    }
    navigation.navigate('DeliveryConfirm');
  }

  async function handleStart() {
    if (delivery.start_date) {
      Alert.alert('Fastfeet', 'Retirada já realizada');
    }

    const start_date = format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
      locale: pt,
    });

    try {
      const response = await api.put(
        `deliveryman/${delivery.id}/deliveries?date=${start_date}`,
        { id: delivery.id, start_date }
      );

      Alert.alert('Fastfeet', 'Encomenda Retirada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível efetuar retirada da encomenda');
    }
  }

  return (
    <>
      <Header>
        <HeaderButton>
          <TouchableOpacity onPress={handleDeliveryClear}>
            <Icon name="chevron-left" size={40} color="#FFF" />
          </TouchableOpacity>
        </HeaderButton>

        <HeaderTitle>Detalhes da encomenda</HeaderTitle>
      </Header>
      <Container>
        <DeliveryDetail>
          <HeaderDetail>
            <Icon name="local-shipping" size={24} color="#7D40E7" />
            <HeaderDetailTitle>Informações da entrega</HeaderDetailTitle>
          </HeaderDetail>
          <Detail>
            <Label>DESTINATÁRIO</Label>
            <Input>{delivery.recipient.name}</Input>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Input>
              {delivery.recipient.address},{delivery.recipient.number},
              {delivery.recipient.complement},{delivery.recipient.city}-
              {delivery.recipient.state},{delivery.recipient.postal_code}
            </Input>
            <Label>PRODUTO</Label>
            <Input>{delivery.product}</Input>
          </Detail>
        </DeliveryDetail>
        <SituationDetail>
          <HeaderDetail>
            <Icon name="event" size={24} color="#7D40E7" />
            <HeaderDetailTitle>Situação da entrega</HeaderDetailTitle>
          </HeaderDetail>
          <Detail>
            <Label>STATUS</Label>
            <Input>{delivery.status}</Input>
            <Dates>
              <Initial>
                <Label>DATA DE RETIRADA</Label>
                <Input>{startDate}</Input>
              </Initial>
              <End>
                <Label>DATA ENTREGA</Label>
                <Input>{endDate}</Input>
              </End>
            </Dates>
          </Detail>
        </SituationDetail>

        <Footer>
          <Grid>
            <TouchableOpacity onPress={handleStart}>
              <ButtonContext>
                <Icon name="store" size={24} color="#82BF18" />
                <ButtonText>Confirmar Retirada</ButtonText>
              </ButtonContext>
            </TouchableOpacity>
          </Grid>
          <FooterDivisor />
          <Grid>
            <TouchableOpacity onPress={handleNewProblem}>
              <ButtonContext>
                <Icon name="highlight-off" size={24} color="#E74040" />
                <ButtonText>Informar Problema</ButtonText>
              </ButtonContext>
            </TouchableOpacity>
          </Grid>
          <FooterDivisor />
          <Grid>
            <TouchableOpacity onPress={handleViewProblemas}>
              <ButtonContext>
                <Icon name="info-outline" size={24} color="#E7BA40" />
                <ButtonText>Visualizar Problemas</ButtonText>
              </ButtonContext>
            </TouchableOpacity>
          </Grid>
          <FooterDivisor />
          <Grid>
            <TouchableOpacity onPress={handleConfirmDelivery}>
              <ButtonContext>
                <Icon name="check-circle" size={24} color="#7D40E7" />
                <ButtonText>Confirar Entrega</ButtonText>
              </ButtonContext>
            </TouchableOpacity>
          </Grid>
        </Footer>
      </Container>
    </>
  );
}

Delivery.navigationOptions = {
  headerLeft: () => (
    <TouchableOpacity onPress={() => {}}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
};

import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
  ProblemDetail,
  Form,
  ButtonText,
  FormInput,
} from './styles';

export default function Problem({ navigation }) {
  const delivery = useSelector((state) => state.delivery.delivery);
  const [problem, setProblem] = useState('');

  function handleBack() {
    navigation.navigate('Delivery');
  }

  async function handleProblem() {
    if (!problem) {
      Alert.alert(
        'Erro',
        'Informe o problema que ocorreu na entrega da encomenda'
      );
      return;
    }
    try {
      const { id } = delivery;
      await api.post(`delivery/${id}/problems`, {
        description: problem,
      });

      Alert.alert('Aviso', 'Problema registrado com sucesso!');
      handleBack();
    } catch (error) {
      Alert.alert('Aviso', 'Erro ao registrar problema na encomenda!');
    }
  }
  return (
    <>
      <Header>
        <HeaderButton>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="chevron-left" size={40} color="#FFF" />
          </TouchableOpacity>
        </HeaderButton>
        <HeaderTitle>Informar o problema</HeaderTitle>
      </Header>
      <Container>
        <Form>
          <FormInput
            multiline
            numberOfLines={15}
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            value={problem}
            onChangeText={setProblem}
          />

          <TouchableOpacity onPress={handleProblem}>
            <ButtonText>Enviar</ButtonText>
          </TouchableOpacity>
        </Form>
      </Container>
    </>
  );
}

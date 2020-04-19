import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import ItemList from './ItemList';
import {
  Container,
  Header,
  HeaderButton,
  HeaderTitle,
  DeliveryTitle,
  List,
} from './styles';

export default function ProblemList({ navigation }) {
  const delivery = useSelector((state) => state.delivery.delivery);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);

      setData(response.data);
    }

    loadProblems();
  }, [data, delivery.id]);
  function handleBack() {
    navigation.navigate('Delivery');
  }
  return (
    <>
      <Header>
        <HeaderButton>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="chevron-left" size={40} color="#FFF" />
          </TouchableOpacity>
        </HeaderButton>
        <HeaderTitle>Visualizar problemas</HeaderTitle>
      </Header>
      <DeliveryTitle>Encomenda 01</DeliveryTitle>

      <Container>
        <List
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ItemList data={item} />}
        />
      </Container>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import AsyncSelect from '~/components/Select';

import api from '~/services/api';

import {
  Container,
  Content,
  Title,
  Button,
  Recipient,
  Deliveryman,
  Product,
} from './styles';

export default function New() {
  const history = useHistory();
  const location = useLocation();

  const order = location.state ? location.state : null;
  const [recipient_id, setRecipientId] = useState(0);
  const [deliveryman_id, setDeliverymanId] = useState(0);

  const [title, setTitle] = useState('Cadastro de Encomendas');

  const schema = Yup.object().shape({
    product: Yup.string().required('Produto é obrigatório'),
  });

  async function loadRecipients(inputValue) {
    try {
      const response = await api.get('recipients');

      const options = response.data.map((recipient) => ({
        ...recipient,
        value: recipient.id,
        label: recipient.name,
      }));

      return options.filter((d) =>
        d.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      return [];
    }
  }

  async function loadDeliverymans(inputValue) {
    try {
      const response = await api.get('deliveryman');

      const options = response.data.map((deliveryman) => ({
        ...deliveryman,
        value: deliveryman.id,
        label: deliveryman.name,
      }));

      return options.filter((f) =>
        f.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      return [];
    }
  }

  useEffect(() => {
    if (order) {
      console.tron.log(order);
      setTitle('Edição de Encomendas');
      setRecipientId(order.recipient_id.value);
      setDeliverymanId(order.recipient_id.value);
    }
  }, [order]);

  function handleBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    const delivery = {
      ...data,
      recipient_id,
      deliveryman_id,
    };

    if (!order) {
      try {
        const _delivery = { ...delivery, status: 'AGUARDANDO RETIRADA' };
        await api.post('order', _delivery);
        toast.success('Encomenda cadastrada com sucesso!');
        history.push('delivery');
      } catch (error) {
        toast.error(
          'Erro ao cadastrar a encomenda. Verifique os campos e tente novamente'
        );
      }
    } else {
      try {
        await api.put(`order/${order.id}`, delivery);
        toast.warn('Encomenda atualizada com sucesso!');
        history.push('delivery');
      } catch (error) {
        toast.error(
          'Erro ao atualizar a encomenda. Verifique os campos e tente novamente'
        );
      }
    }
  }

  return (
    <Container>
      <header>
        <Title>{title}</Title>
        <div>
          <Button secondary onClick={handleBack}>
            <MdKeyboardArrowLeft color="#fff" size={20} />
            VOLTAR
          </Button>

          <Button type="submit" form="frmDelivery">
            <MdDone color="#fff" size={20} />
            SALVAR
          </Button>
        </div>
      </header>
      <Content>
        <Form
          schema={schema}
          initialData={order}
          id="frmDelivery"
          onSubmit={handleSubmit}
        >
          <div className="grid">
            <Recipient>
              <p>Destinatário</p>
              <FormControl variant="outlined">
                <AsyncSelect
                  name="recipient_id"
                  cacheOptions
                  loadOptions={(inputValue) => loadRecipients(inputValue)}
                  defaultOptions
                  onChange={(e) => setRecipientId(e.value)}
                />
              </FormControl>
            </Recipient>
            <Deliveryman>
              <p>Entregador</p>
              <FormControl variant="outlined">
                <AsyncSelect
                  name="deliveryman_id"
                  cacheOptions
                  loadOptions={(inputValue) => loadDeliverymans(inputValue)}
                  defaultOptions
                  onChange={(e) => setDeliverymanId(e.value)}
                />
              </FormControl>
            </Deliveryman>
          </div>

          <div className="grid">
            <Product>
              <p>Produto</p>
              <Input name="product" type="text" />
            </Product>
          </div>
        </Form>
      </Content>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';

import {
  Container,
  Content,
  Title,
  Button,
  Name,
  Address,
  NumberComplement,
  City,
  StatePostalCode,
} from './styles';

export default function NewRecipient() {
  const history = useHistory();
  const location = useLocation();
  const [title, setTitle] = useState('Cadastro de Destinatário');
  const recipient = location.state ? location.state.recipient : null;

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    address: Yup.string().required('O endereço é obrigatório'),
    number: Yup.string().required('O número é obrigatório'),
    city: Yup.string().required('A cidade é obrigatório'),
    postal_code: Yup.string().required('O CEP é obrigatório'),
    state: Yup.string()
      .required('a UF é obrigatório')
      .min(2, 'UF deve ser com dois caracteres')
      .max(2, 'UF deve ser com dois caracteres'),
  });

  useEffect(() => {
    if (recipient) {
      setTitle('Edição de Destinatário');
    }
  }, [recipient]);

  function handleBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    if (!recipient) {
      try {
        await api.post('recipients', data);
        toast.success('Destinatário cadastrado com sucesso! :)');
        history.push('/recipient');
      } catch (error) {
        toast.error(
          'Erro ao cadastrar o destinatário. :/  Verifique os campos e tente novamente'
        );
      }
    } else {
      try {
        await api.put(`recipients/${recipient.id}`, data);
        toast.warn('Cadastro do destinatário atualizado com sucesso  :)');
        history.push('/recipient');
      } catch (error) {
        toast.error('Erro ao atualizar o destinatário  :/');
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

          <Button type="submit" form="frmRecipient">
            <MdDone color="#fff" size={20} />
            SALVAR
          </Button>
        </div>
      </header>
      <Content>
        <Form
          schema={schema}
          initialData={recipient}
          id="frmRecipient"
          onSubmit={handleSubmit}
        >
          <div className="grid">
            <Name>
              <p>Nome</p>
              <Input name="name" type="text" />
            </Name>
          </div>

          <div className="grid">
            <Address>
              <p>Rua</p>
              <Input name="address" type="text" />
            </Address>

            <NumberComplement>
              <p>Número</p>
              <Input name="number" type="text" />
            </NumberComplement>
            <NumberComplement>
              <p>Complemento</p>
              <Input name="complement" type="text" />
            </NumberComplement>
          </div>

          <div className="grid">
            <City>
              <p>Cidade</p>
              <Input name="city" type="text" />
            </City>
            <StatePostalCode>
              <p>Estado</p>
              <Input name="state" type="text" />
            </StatePostalCode>
            <StatePostalCode>
              <p>CEP</p>
              <Input name="postal_code" type="text" />
            </StatePostalCode>
          </div>
        </Form>
      </Content>
    </Container>
  );
}

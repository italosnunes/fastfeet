import React from 'react';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import AvatarInput from '../AvatarInput';
import { Container, Content, Title, Button } from './styles';
import api from '~/services/api';

export default function NewDeliveryman() {
  const history = useHistory();
  const location = useLocation();

  const { state } = location;
  const deliveryman = state ? state.state.deliveryman : null;

  const title = deliveryman
    ? 'Edição de Entregadores'
    : 'Cadastro de Entregadores';

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('O e-mail é obrigatório'),
  });

  function handleBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    if (!deliveryman) {
      try {
        await api.post('deliveryman', data);
        toast.success('Entregador cadastrado com sucesso!');
        history.push('/deliveryman');
      } catch (error) {
        toast.error(
          'Erro ao cadastrar entregador. Verifique os dados e tente novamente'
        );
      }
    } else {
      try {
        await api.put(`deliveryman/${deliveryman.id}`, data);
        toast.warn('Cadastro do Entregador atualizado com sucesso!');
        history.push('/deliveryman');
      } catch (error) {
        toast.error(
          'Erro ao atualizar dados do entregador. Verifique as informações e tente novamente'
        );
      }
    }
  }

  return (
    <Container>
      <header>
        <Title>{title}</Title>
        <div>
          <Button type="button" secondary onClick={handleBack}>
            <MdKeyboardArrowLeft color="#fff" size={20} />
            VOLTAR
          </Button>

          <Button type="submit" form="frmDeliveryman">
            <MdDone color="#fff" size={20} />
            SALVAR
          </Button>
        </div>
      </header>
      <Content>
        <Form
          schema={schema}
          id="frmDeliveryman"
          initialData={deliveryman}
          onSubmit={handleSubmit}
        >
          <AvatarInput name="avatar_id" />
          <p>Nome</p>
          <Input name="name" type="text" placeholder="Nome do Entregador" />
          <p>E-mail</p>
          <Input name="email" type="email" placeholder="Digite o e-mail" />
        </Form>
      </Content>
    </Container>
  );
}

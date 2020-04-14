import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ActionsMenu } from '~/components/ActionsMenu';
import Avatar from '~/components/Avatar';

import api from '~/services/api';

import {
  Container,
  Title,
  Menu,
  Table,
  TableHeader,
  TableItem,
  ID,
  Picture,
  Actions,
  Espaco,
} from './styles';

export default function Deliveryman() {
  const history = useHistory();

  const [deliverymans, setDeliverymans] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadDeliveryman(filter) {
      let response;

      if (filter) {
        response = await api.get(`/deliveryman/?q=${filter}`);
      } else {
        response = await api.get('/deliveryman');
      }

      setDeliverymans(response.data);
    }

    loadDeliveryman(query);
  }, [deliverymans, query]);

  function handleNew() {
    history.push('/deliveryman/new');
  }

  function handleEdit(deliveryman) {
    history.push('/deliveryman/new', {
      state: { deliveryman },
    });
  }

  function handleFilter(filter) {
    setQuery(filter);
  }

  async function handleDel(id) {
    if (window.confirm('Tem certeza que deseja excluir o entregador?')) {
      try {
        await api.delete(`deliveryman/${id}`);
        toast.success('Entregador excluído com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir entregador');
      }
    }
  }

  return (
    <Container>
      <Title>Gerenciando Entregadores</Title>
      <Menu>
        <div>
          <MdSearch size={16} color="#444" />
        </div>

        <input
          placeholder="Buscar por entregadores"
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
        />

        <button type="button" onClick={handleNew}>
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </Menu>
      <Table>
        <thead>
          <TableHeader>
            <ID>ID</ID>
            <Picture>Foto</Picture>
            <td>Nome</td>
            <td>E-mail</td>
            <Actions>Ações</Actions>
          </TableHeader>
        </thead>
        <tbody>
          {deliverymans.map((deliveryman) => (
            <>
              <TableItem>
                <ID>
                  <small>{deliveryman.id}</small>
                </ID>
                <Picture>
                  {deliveryman.avatar && (
                    <Avatar
                      alt={deliveryman.name}
                      src={deliveryman.avatar.url}
                    />
                  )}
                  {!deliveryman.avatar && <Avatar alt={deliveryman.name} />}
                </Picture>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <Actions>
                  <ActionsMenu
                    edit
                    del
                    editFunction={() => handleEdit(deliveryman)}
                    delFunction={() => handleDel(deliveryman.id)}
                  />
                </Actions>
              </TableItem>
              <Espaco />
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

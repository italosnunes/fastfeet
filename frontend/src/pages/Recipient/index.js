import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ActionsMenu } from '~/components/ActionsMenu';

import api from '~/services/api';

import {
  Container,
  Title,
  Menu,
  Table,
  TableHeader,
  TableItem,
  ID,
  Name,
  Address,
  Actions,
  Espaco,
} from './styles';

export default function Recipient() {
  const history = useHistory();
  const [recipients, setRecipients] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadRecipients(filter) {
      let response;

      if (filter) {
        response = await api.get(`recipients/?q=${filter}`);
      } else {
        response = await api.get('recipients');
      }
      setRecipients(response.data);
    }
    loadRecipients(query);
  }, [recipients, query]);

  function handleNew() {
    history.push('/recipient/new');
  }

  function handleEdit(recipient) {
    history.push('/recipient/new', { recipient });
  }

  async function handleDel(id) {
    if (window.confirm('Tem certeza que deseja excluir destinatário?')) {
      try {
        await api.delete(`recipients/${id}`);
        toast.success('Destinatário excluído com sucesso!  :) ');
      } catch (error) {
        toast.success('Não foi possível excluir o destinatário. :/ ');
      }
    }
  }

  function handleFilter(filter) {
    setQuery(filter);
  }

  return (
    <Container>
      <Title>Gerenciando Destinatários</Title>
      <Menu>
        <div>
          <MdSearch size={16} color="#444" />
        </div>

        <input
          placeholder="Buscar por destinatários"
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
            <Name>Nome</Name>
            <Address>Endereço</Address>
            <Actions>Ações</Actions>
          </TableHeader>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <>
              <TableItem>
                <ID>
                  <small>{recipient.id}</small>
                </ID>
                <Name>{recipient.name}</Name>
                <Address>{`${recipient.address || ''} ${
                  recipient.number || ''
                } ${recipient.complement || ''} ${recipient.city || ''} ${
                  recipient.state || ''
                }`}</Address>
                <Actions>
                  <ActionsMenu
                    edit
                    del
                    editFunction={() => handleEdit(recipient)}
                    delFunction={() => handleDel(recipient.id)}
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

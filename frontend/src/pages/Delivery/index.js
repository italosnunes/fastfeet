import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd, MdSearch } from 'react-icons/md';
import ImageAvatar from '~/components/Avatar';
import { ActionsMenu } from '~/components/ActionsMenu';
import {
  Container,
  Title,
  Menu,
  Table,
  TableHeader,
  TableItem,
  ID,
  Deliveryman,
  Status,
  Actions,
  Espaco,
} from './styles';

import api from '~/services/api';

export default function Delivery() {
  const [orders, setOrders] = useState([]);
  const [query, setQuery] = useState('');

  const history = useHistory();

  useEffect(() => {
    async function loadOrders(filter) {
      let response;

      if (filter) {
        response = await api.get(`order/?q=${filter}`);
      } else {
        response = await api.get('order');
      }

      const data = response.data.orders.map((order) => ({
        ...order,
      }));
      setOrders(data);
    }

    loadOrders(query);
  }, [orders, query]);

  function handleNew() {
    history.push('/delivery/new');
  }

  function handleEdit(order) {
    history.push('/delivery/new', order);
  }

  function handleFinder(filter) {
    setQuery(filter);
  }

  async function handleDel(id) {
    if (window.confirm('Tem certeza que deseja excluir a entrega?')) {
      try {
        await api.delete(`order/${id}`);
        toast.success('Entrega excluída com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir encomenda');
      }
    }
  }

  return (
    <Container>
      <Title>Gerenciando Encomendas</Title>
      <Menu>
        <div>
          <MdSearch size={16} color="#444" />
        </div>

        <input
          placeholder="Buscar por encomendas"
          onChange={(e) => {
            handleFinder(e.target.value);
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
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <Actions>Ações</Actions>
          </TableHeader>
        </thead>
        <tbody>
          {orders.map((order) => (
            <>
              <TableItem>
                <ID>
                  <small>{order.id}</small>
                </ID>
                <td>{order.recipient.name}</td>
                <Deliveryman>
                  {order.deliveryman.avatar && (
                    <ImageAvatar
                      alt={order.deliveryman.name}
                      src={order.deliveryman.avatar.url}
                    />
                  )}
                  {!order.deliveryman.avatar && (
                    <ImageAvatar alt={order.deliveryman.name} />
                  )}
                  <p>{order.deliveryman.name}</p>
                </Deliveryman>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>

                <Status color={order.status}>
                  <div>
                    <strong>
                      <div className="circle" />
                      {order.status}
                    </strong>
                  </div>
                </Status>
                <Actions>
                  <ActionsMenu
                    edit
                    see
                    del
                    modal="delivery"
                    editFunction={() =>
                      handleEdit({
                        id: order.id,
                        recipient_id: {
                          value: order.recipient.id,
                          label: order.recipient.name,
                        },
                        deliveryman_id: {
                          value: order.deliveryman.id,
                          label: order.deliveryman.name,
                        },
                        product: order.product,
                      })
                    }
                    delFunction={() => handleDel(order.id)}
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

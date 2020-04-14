import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { ActionsMenu } from '~/components/ActionsMenu';
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableItem,
  ID,
  Actions,
  Espaco,
} from './styles';

export default function Problem() {
  const [problems, setProblem] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('delivery/problems');
      setProblem(response.data);
    }
    loadProblems();
  }, [problems]);

  async function handleCancel(id) {
    if (window.confirm('Tem certeza que deseja cancelar a encomenda?')) {
      try {
        const data = {
          canceled_at: new Date(),
          status: 'CANCELADO',
        };

        await api.put(`problem/${id}/cancel-delivery`, data);
        toast.success('Encomenda Cancelada com sucesso!');
      } catch (error) {
        toast.error('Erro ao cancelar encomenda');
      }
    }
  }
  return (
    <Container>
      <Title>Problemas na entrega</Title>

      <Table>
        <thead>
          <TableHeader>
            <ID>Encomenda</ID>
            <td>Problema</td>
            <Actions>Ações</Actions>
          </TableHeader>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <>
              <TableItem>
                <ID>
                  <small>{problem.id}</small>
                </ID>
                <td>{problem.description}</td>
                <Actions>
                  <ActionsMenu
                    see
                    del
                    delText="Cancelar Encomenda"
                    delFunction={() => handleCancel(problem.id)}
                    modal="problem"
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

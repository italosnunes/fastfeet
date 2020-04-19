/* eslint-disable react/prop-types */
import React from 'react';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import { Container, Problem, Detail, Date } from './styles';

export default function ItemList({ data }) {
  const dataCreate = format(parseISO(data.createdAt), 'dd/MM/yyyy', {
    locale: pt,
  });

  return (
    <Container>
      <Problem>
        <Detail>{data.description}</Detail>
        <Date>{dataCreate}</Date>
      </Problem>
    </Container>
  );
}

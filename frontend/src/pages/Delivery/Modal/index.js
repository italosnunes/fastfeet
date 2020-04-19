import React from 'react';

import { Signature } from './styles';

export default function Modal(props) {
  const { order } = props;
  console.tron.log(order);
  return (
    <>
      <strong>Informações da encomenda</strong>
      <p>{order.product}</p>
      <p>
        {`${order.recipient.address},${order.recipient.number || ''} ${
          order.recipient.complement || ''
        }`}
      </p>
      <p>{`${order.recipient.city}-${order.recipient.state}`}</p>
      <p>{order.recipient.postal_code}</p>
      <hr />
      <p>
        <strong>Datas</strong>
      </p>
      <div>
        <strong>Retirada:</strong>
        <small>{order.start_date}</small>
      </div>
      <div>
        <strong>Entrega:</strong>
        <small>{order.end_date}</small>
      </div>

      <hr />
      <strong>Assinatura do destinatário</strong>
      <Signature />
    </>
  );
}

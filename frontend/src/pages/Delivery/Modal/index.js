import React from 'react';

import { Signature } from './styles';

export default function Modal() {
  return (
    <>
      <strong>Informações da encomenda</strong>
      <p>Ali...</p>
      <p>Diadema - SP</p>
      <p>09960-580</p>
      <hr />
      <p>
        <strong>Datas</strong>
      </p>
      <div>
        <strong>Retirada:</strong>
        <small>25/01/2020</small>
      </div>
      <div>
        <strong>Entrega:</strong>
        <small>25/01/2020</small>
      </div>

      <hr />
      <strong>Assinatura do destinatário</strong>
      <Signature />
    </>
  );
}

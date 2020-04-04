import Mail from '../../lib/Mail';

class CreateOrder {
  get key() {
    return 'CreateOrder';
  }

  async handle({ data }) {
    const { deliveryman, recipient, order } = data;

    console.log('Iniciando a fila...');

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Existe uma nova encomenda te esperando',
      template: 'newOrder',
      context: {
        deliveryman: deliveryman.name,
        product: order.product,
        name: recipient.name,
        address: recipient.address,
        number: recipient.number,
        complement: recipient.complement,
        city: recipient.city,
        state: recipient.state,
        postal_code: recipient.postal_code,
      },
    });
  }
}

export default new CreateOrder();

import * as Yup from 'yup';
import Order from '../models/Order';
import Deliveryman from '../models/DeliveryMan';
import Recipient from '../models/Recipient';

import Queue from '../../lib/Queue';
import CreateOrder from '../jobs/CreateOrder';

class OrderController {
  async index(req, res) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'name',
              'address',
              'number',
              'complement',
              'city',
              'state',
              'postal_code',
            ],
          },
        ],
      });
      return res.json({ orders });
    } catch (error) {
      return res.json({ message: 'Erro list orders', error });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);
      const recipient = await Recipient.findByPk(req.body.recipient_id);

      const order = await Order.create(req.body);

      await Queue.add(CreateOrder.key, {
        deliveryman,
        recipient,
        order,
      });

      return res.json({ order, deliveryman, recipient });
    } catch (error) {
      return res.status(400).json({
        message: 'Erro create order! Verify fields and try again',
        error,
      });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    try {
      const order = await Order.findByPk(req.params.id);
      await order.update(req.body);

      return res.json(order);
    } catch (error) {
      return res.status(400).json({ message: 'Erro update order', error });
    }
  }

  async delete(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      const order_deleted = order;

      await order.destroy();

      return res.json({
        message: 'Order deleted with success!',
        order: order_deleted,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Error: Order is not found for delete!',
        error,
      });
    }
  }
}

export default new OrderController();

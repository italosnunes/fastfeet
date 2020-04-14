import DeliveryProblem from '../models/DeliveryProblem';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/DeliveryMan';
import Queue from '../../lib/Queue';
import CancelOrder from '../jobs/CancelOrder';

class DeliveryProblemController {
  async index(req, res) {
    const deliveryProblems = await DeliveryProblem.findAll({
      attributes: ['id', 'description'],
      include: [
        {
          model: Order,
          as: 'orders',
          attributes: ['product', 'start_date', 'end_date', 'canceled_at'],
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'id',
                'name',
                'address',
                'number',
                'complement',
                'city',
                'state',
                'postal_code',
              ],
            },
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email', 'avatar_id'],
            },
          ],
        },
      ],
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const { description } = req.body;

    try {
      const problem = await DeliveryProblem.create({
        delivery_id: req.params.order,
        description,
      });

      return res.json(problem);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Erro saving the problem of order', error });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const problem = await DeliveryProblem.findByPk(id);

    const order_id = problem.delivery_id;

    const order = await Order.findByPk(order_id, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
        },
      ],
    });

    const { recipient, deliveryman } = order;

    await Queue.add(CancelOrder.key, {
      deliveryman,
      recipient,
      order,
    });

    await order.update(req.body);

    return res.json({ problem, order });
  }
}

export default new DeliveryProblemController();

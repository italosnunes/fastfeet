import {
  parseISO,
  startOfDay,
  endOfDay,
  format,
  isAfter,
  isBefore,
} from 'date-fns';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/DeliveryMan';

const { Op } = require('sequelize');

class DeliveryController {
  async index(req, res) {
    const { delivered } = req.query;
    const { id } = req.params;
    const ops = {
      opNull: {
        [Op.is]: null,
      },
      opNotNull: {
        [Op.not]: null,
      },
    };

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.json({
        error: { message: 'Deliveryman not found' },
      });
    }

    const order = await Order.findAll({
      // where: delivered ? a.opNotNull : a.opNull,
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: delivered ? ops.opNotNull : ops.opNull,
      },
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'status',
        'created_at',
      ],
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
    return res.json({ order });
  }

  async update(req, res) {
    const { id, start_date, end_date, signature_id } = req.body;
    const deliveryman_id = req.params.id;
    const { date } = req.query;
    const timeJob = { initJob: '08:00:00', endJob: '18:00:00' };

    const parsedDate = parseISO(date);

    const timeCompare = parseISO(format(parsedDate, 'yyyy-MM-dd HH:mm:ss'));
    const DateCompare = {
      init: parseISO(format(parsedDate, `yyyy-MM-dd ${timeJob.initJob}`)),
      end: parseISO(format(parsedDate, `yyyy-MM-dd ${timeJob.endJob}`)),
    };

    if (!start_date && !end_date) {
      return res
        .status(401)
        .json({ message: 'Start date or End date ir required' });
    }

    if (
      (start_date && isBefore(timeCompare, DateCompare.init)) ||
      (start_date && isAfter(timeCompare, DateCompare.end))
    ) {
      return res.status(401).json({ message: 'Do not time for Job' });
    }

    const delivery = await Order.findByPk(id, {
      attributes: ['id', 'product', 'start_date'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
        },
      ],
    });

    if (start_date) {
      const order = await Order.findAndCountAll({
        where: {
          deliveryman_id,
          start_date: {
            [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
          },
        },
      });

      if (order.count >= process.env.MAX_DELIVERY_BY_DAY) {
        return res.status(401).json({
          message: `Max permitted by day is ${process.env.MAX_DELIVERY_BY_DAY} delivery. Sorry :(`,
        });
      }

      delivery.start_date = start_date;
      delivery.status = 'RETIRADA';
      await delivery.save();
      return res.json({ delivery });
    }

    if (end_date && !signature_id) {
      return res.status(401).json({ message: 'Order without Signature' });
    }

    try {
      delivery.end_date = end_date;
      delivery.signature_id = signature_id;
      delivery.status = 'ENTREGUE';
      delivery.save();
      return res.json({ delivery });
    } catch (error) {
      return res.status(400).json({
        message:
          'Error finalizing delivery. Check the date and if the signature were informad',
        error,
      });
    }
  }
}

export default new DeliveryController();

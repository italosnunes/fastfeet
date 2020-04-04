import Deliveryman from '../models/DeliveryMan';
import FileDeliveryman from '../models/FileDeliveryMan';

class DeliverymanController {
  async store(req, res) {
    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.json({ id, name, email });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveryman = await Deliveryman.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
    });
    return res.json(deliveryman);
  }

  async update(req, res) {
    const { id } = req.params;
    const { email } = req.body;
    const deliveryman = await Deliveryman.findByPk(id);

    if (email && email !== deliveryman.email) {
      const deliveryExists = await Deliveryman.findOne({
        where: { email },
      });

      if (deliveryExists) {
        return res.json({ error: 'Email utilized for other Deliveryman' });
      }
    }

    await deliveryman.update(req.body);

    const { name, avatar } = await Deliveryman.findByPk(id, {
      include: [
        {
          model: FileDeliveryman,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deliveryman = await Deliveryman.findByPk(id);

      const deliveryDeleted = deliveryman;
      await deliveryman.destroy();

      return res.json({
        message: 'Delivery man deleted with success!',
        deliveryman: deliveryDeleted,
      });
    } catch (error) {
      return res.json({ error: 'Not deleted!' });
    }
  }
}

export default new DeliverymanController();

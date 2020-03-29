import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required().min(2).max(2),
      postal_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipients = await Recipient.create(req.body);

    return res.json(recipients);
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    await recipient.update(req.body);

    return res.json(recipient);
  }

  async get(req, res) {
    const recipients = await Recipient.findAll();
    return res.json(recipients);
  }

  async delete(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);
    const recipient_delete = recipient;

    await recipient.destroy();

    return res.json({
      message: 'Recipient deleted whit success',
      recipient_delete,
    });
  }
}

export default new RecipientController();

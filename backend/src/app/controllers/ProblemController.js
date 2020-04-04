import { Op } from 'sequelize';
import DeliveryProblem from '../models/DeliveryProblem';

class ProblemController {
  async index(req, res) {
    const problems = await DeliveryProblem.findAll({
      where: {
        delivery_id: {
          [Op.eq]: req.params.order,
        },
      },
    });

    return res.json(problems);
  }
}

export default new ProblemController();

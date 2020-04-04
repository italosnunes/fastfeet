import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        recipient_id: Sequelize.INTEGER,
        deliveryman_id: Sequelize.INTEGER,
        signature_id: Sequelize.INTEGER,
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreingKey: 'recipient_id',
      as: 'recipient',
    });

    this.belongsTo(models.Deliveryman, {
      foreingKey: 'deliveryman_id',
      as: 'deliveryman',
    });

    this.belongsTo(models.FileSignature, {
      foreingKey: 'signature_id',
      as: 'signature',
    });

    /* this.belongsTo(models.DeliveryProblem, {
      otherKey: 'delivery_id',
      foreingKey: 'id',
      // as:'problems'
    }); */
  }
}

export default Order;

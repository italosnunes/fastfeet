import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import Deliveryman from '../app/models/DeliveryMan';
import FileDeliveryman from '../app/models/FileDeliveryMan';
import Order from '../app/models/Order';
import FileSignature from '../app/models/FileSignature';
import DeliveryProblem from '../app/models/DeliveryProblem';

import databaseConfig from '../config/database';

const models = [
  User,
  Recipient,
  Deliveryman,
  FileDeliveryman,
  Order,
  FileSignature,
  DeliveryProblem,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();

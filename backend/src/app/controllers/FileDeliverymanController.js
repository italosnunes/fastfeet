import FileDeliveryMan from '../models/FileDeliveryMan';

class FileDeliverymanController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await FileDeliveryMan.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    return res.json(req.file);
  }
}

export default new FileDeliverymanController();

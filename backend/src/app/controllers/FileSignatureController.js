import FileSignature from '../models/FileSignature';

class FileSignatureController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await FileSignature.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    return res.json(req.file);
  }
}

export default new FileSignatureController();

const Product = require("./ProductModel");

const status = 500;

module.exports = {
  async all(req, res) {
    try {
      const repositories = await Product.find({});
      return res.json(repositories);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async findById(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);
      return res.json(product);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.json(product);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      return res.json(product);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      return res.send();
    } catch (err) {
      return res.status(status).send();
    }
  }
};

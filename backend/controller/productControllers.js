const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log({ message: error });
    res.status(500).json({ message: 'Server errr' });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log({ message: error });
    res.status(500).json({ message: 'Server errr' });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
};

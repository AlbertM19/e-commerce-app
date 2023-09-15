const db = require('../models');
const Product = db.product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const product = {
    id: req.body.id,
    category: req.body.category,
    type: req.body.type,
    product_name: req.body.product_name,
    description: req.body.description,
    price: req.body.price,
    price_int: req.body.price_int,
    image_1: req.body.image_1,
    image_2: req.body.image_2,
    image_3: req.body.image_3,
    image_4: req.body.image_4,
    promo: req.body.promo
  }

  Product.create(product)
    .then((data) => res.send(data))
    .catch((e) => res.status(500).send({
      message: e.message || `Some error occured while creating product...`
    }))
}

exports.findAll = (req, res) => {

  Product.findAll()
    .then((data) => res.send(data))
    .catch((e) => res.status(500).send({
      message: e.message || `Some error occured while retrieving products...`
    }))
}

exports.findOne = async (req, res) => {
  const id = req.params.id

  try {
    const product = await Product.findByPk(id)

    if (!product) {
      return res.status(400).json({ message: 'product not found' })
    }

    res.status(200).json(product)
  } catch (e) {
    console.error(`Error updating product..`, e)
    return res.status(500).json({ message: `Error updating product` })
  }

}

exports.update = async (req, res) => {
  const id = req.params.id

  try {
    const product = await Product.findByPk(id)

    if (!product) {
      return res.status(400).json({ message: 'product not found' })
    };
    product.product_name = req.body.product_name
    product.category = req.body.category
    product.type = req.body.type
    product.description = req.body.description
    product.price = req.body.price
    product.price_int = req.body.price_int
    product.image_1 = req.body.image_1
    product.image_2 = req.body.image_2
    product.image_3 = req.body.image_3
    product.image_4 = req.body.image_4
    product.promo = req.body.promo

    product.save()

    res.status(200).json(product)
  } catch (e) {
    console.error(`Error updating product..`, e)
    return res.status(500).json({ message: `Error updating product` })
  }

}
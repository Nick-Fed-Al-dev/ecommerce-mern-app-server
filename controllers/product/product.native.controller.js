const Product = require('../../models/Product')

class ProductNativeController{

  async getProducts(req, res){
    try {
      const products = await Product.find({})
      res.json(products)
    } catch (error) {
      
    }
  }

  async getProductById(req, res){
    try {
      const id = req.params.id
      const product = await Product.findOne({id})
      res.json(product)
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'PRODUCT NOT FOUND'
      })
    }
  }
}

module.exports = ProductNativeController
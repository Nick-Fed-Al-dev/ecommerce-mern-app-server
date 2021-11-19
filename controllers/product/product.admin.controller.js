const Product = require('../../models/Product')

class ProductAdminController{
  async getProducts(req, res){
    const products = await Product.find({})
    res.send(products)
  }

  async getProductById(req, res){
    try {
      const id = req.params.id
      const product = await Product.findOne({id})
      res.send(product)
    } catch (error) {
      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT NOT FOUND'
      })

    }
  }

  async createProduct(req, res){
    try {
      const {title, price, image} = req.body

      if(!title || !price){
        res
        .status(400)
        .json({
          status: 400,
          message: 'INVALID PRODUCT DATA WAS RECEIVED'
        })
      }

      const product = new Product({title, price, image})
      
      await product.save()

      res
      .status(200)
      .json({
        status: 200,
        message: 'PRODUCT CREATION SUCCESS'
      })

    } catch (error) {
      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT CREATION FAILED'
      })
    }
  }

  async changeProductById(req, res){
    try {
      const id = req.params.id
      await Product.updateOne({id}, req.body)
      res
      .status(200)
      .json({
        status: 200,
        message: 'PRODUCT UPDATION SUCCESS'
      })
    } catch (error) {
      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT NOT FOUND'
      })
    }
  }

  async deleteProductById(req, res){
    try {
      const id = req.params.id
      await Product.deleteOne({id})
      res
      .status(200)
      .json({
        status: 200,
        message: 'PRODUCT DELETION SUCCESS'
      })
    } catch (error) {
      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT NOT FOUND'
      })
    }
  }

}

module.exports = ProductAdminController
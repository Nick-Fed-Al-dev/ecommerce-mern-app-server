const Product = require('../../models/Product')
const ProductType = require('../../models/ProductType')

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
      const {title, price, image, properties, description, type} = req.body
      
      const productTypes = (await ProductType.find({})).map(type => type.eng)

      if(!productTypes.includes(type)){
        return res
        .status(404)
        .json({
          status: 404,
          message: 'THIS PRODUCT TYPE DOES NOT EXIST'
        })
      }

      const product = new Product({title, price, image, type, description})
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
        message: 'PRODUCT CREATION FAILED',
        error: error.message
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
        message: 'PRODUCT NOT FOUND',
        error: error.message
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
        message: 'PRODUCT NOT FOUND',
        error: error.message
      })
    }
  }

}

module.exports = ProductAdminController
const Product = require('../../models/Product')

class ProductNativeController{

  async getProducts(req, res){
    try {
      const page = req.query.page || 1
      const category = req.query.category
      const products = await Product.find(category ? {type: category} : {})
      products = products.filter((product, i) => {
        if(i === 1){
          return (i >= page*10-10-1) && (i < page*10)
        }
        return (i > page*10-10-1) && (i < page*10)
      })
      res.json(products)
    } catch (error) {
      
    }
  }

  async getProductById(req, res){
    try {
      const id = req.params.id
      const product = await Product.findOne({_id: id})
      res.json(product)
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'PRODUCT NOT FOUND',
        error: error.message
      })
    }
  }
}

module.exports = ProductNativeController
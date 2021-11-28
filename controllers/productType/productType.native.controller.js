const ProductType = require('../../models/ProductType')

class ProductTypeNativeController{

  async getProductTypes(req, res){
    const productTypes = await ProductType.find({})
    res.status(200).json(productTypes)
  }

}

module.exports = ProductTypeNativeController
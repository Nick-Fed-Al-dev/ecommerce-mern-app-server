const ProductType = require('../../models/ProductType')

class ProductTypeAdminController{
  
  async getProductTypes(req, res){
    try {

      const productTypes = await ProductType.find({})
      res
      .status(200)
      .json(productTypes)

    } catch (error) {

      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT TYPES GETTING FAILED',
        error: error.message

      })
    }
  }

  async createProductType(req, res){
    try {
      const {rus, eng, image} = req.body
      const candidate = await ProductType.findOne({eng})
      if(candidate){
        return res
        .status(400)
        .json({
          status: 400,
          message: 'PRODUCT TYPE WITH THIS NAME ALREADY EXISTS'
        })
      }
      const type = new ProductType({rus, eng, image})
      await type.save()
      res
      .status(200)
      .json({
        status: 200,
        message: 'PRODUCT TYPE CREATION SUCCESS'
      })

    } catch (error) {

      res
      .status(400)
      .json({
        status: 400,
        message: 'PRODUCT TYPE CREATION FAILED',
        error: error.message

      })
    }
  }

  async updateProductType(req, res){

  }

  async removeProductType(req, res){

  }

}

module.exports = ProductTypeAdminController
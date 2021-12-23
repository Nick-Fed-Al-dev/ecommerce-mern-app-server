const Product = require('../../models/Product')

class ProductNativeController{

  async getProducts(req, res){
    try {
      let page = Number(req.query.page)
      const category = req.query.category
      if(page == 'undefind' || page == 'null'){
        page = null
      }
      if(category == 'undefind' || category == 'null'){
        category = null
      }
      let products = await Product.find(category ? {type: category} : {})
      if(page){
        products = products.filter((product, i) => {
          if(page === 1){
            return (i >= page*10-10-1) && (i < page*10)
          }
          return (i > page*10-10-1) && (i < page*10)
        })
      }
      res.send(products)
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
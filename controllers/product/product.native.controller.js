const Product = require('../../models/Product')

class ProductNativeController{

  async getProducts(req, res){
    try {
      const products = await Product.find({})
      // await (new Product({
      //   title: 'Tablet product1',
      //   price: 1100,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
      // await (new Product({
      //   title: 'Tablet product2',
      //   price: 1450,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
      // await (new Product({
      //   title: 'Tablet product3',
      //   price: 4100,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
      // await (new Product({
      //   title: 'Tablet product4',
      //   price: 4700,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
      // await (new Product({
      //   title: 'Tablet product5',
      //   price: 1500,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
      // await (new Product({
      //   title: 'Tablet product6',
      //   price: 3670,
      //   type: 'Tablets',
      //   description: 'Best product of the best Best product of the best Best product of the best Best product of the best Best product of the best Best product of the bestvBest product of the bestvBest product of the best Best product of the best Best product of the best Best product of the best',
      //   properties: [
      //     {type: 'Speed', value: '23km/h'},
      //     {type: 'Width', value: '100m'},
      //     {type: 'Length', value: '50m'},
      //     {type: 'USB', value: 'Exists'}
      //   ]
      // })).save()
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
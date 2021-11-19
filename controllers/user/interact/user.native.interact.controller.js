const User = require('../../../models/User')

class NativeInteractController{
  async changeUserById(req, res){
    try {
      const id = req.params.id
      await User.updateOne({id}, req.body)
      res
      .status(200)
      .json({
        status: 200,
        message: 'USER UPDATION SUCCESS',
      })
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'USER NOT FOUND',
        error
      })
    }

  }
}

module.exports = NativeInteractController
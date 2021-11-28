const User = require('../../../models/User')

class NativeInteractController{

  async getUserById(req, res){
    try{
      const id = req.params.id
      const user = await User.findOne({_id: id})
      res.status(200).json(user)
    } catch (error){
      res
      .status(400)
      .json({
        status: 400,
        message: 'FAILED TO GET USER',
        error: error.message
      })
    }
  }

  async changeUserById(req, res){
    try {
      const id = req.params.id
      await User.updateOne({_id: id}, req.body)
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
        error: error.message
      })
    }

  }
}

module.exports = NativeInteractController
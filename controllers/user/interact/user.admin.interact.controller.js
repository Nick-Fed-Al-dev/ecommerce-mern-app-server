const User = require("../../../models/User")


class UserInteractController{
  async getUsers(req, res){
    const users = await User.find({})
    res.send(users)
  }

  async getUserById(req, res){
    try {
      const id = req.params.id
      const user = await User.findById(id)
      res.send(user)
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'USER NOT FOUND'
      })
    }
  }

  async changeUserById(req, res){
    try {
      const id = req.params.id
      await User.updateOne({id}, req.body)
      return res
      .status(201)
      .json({
        status: 201,
        message: 'USER UPDATE SUCCESS'
      })
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'USER NOT FOUND'
      })
    }
  }

  async removeUserById(req, res){
    try {
      const id = req.params.id
      await User.deleteOne({id})
      return res
      .status(201)
      .json({
        status: 201,
        message: 'USER DELETION SUCCESS'
      })
    } catch (error) {
      res
      .status(404)
      .json({
        status: 404,
        message: 'USER NOT FOUND'
      })
    }

  }
}

module.exports = UserInteractController
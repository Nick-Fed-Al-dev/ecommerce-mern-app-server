const Reply = require('../../models/Reply')

class RepliesNativeController {
  async getReplies(req, res){
    try {
      const replies = await Reply.find({})
      res
        .status(200)
        .json(reviews)
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REPLY FAILED TO GET',
          error
        })
    }
  }

  async pushReply(req, res){
    try {
      const {owner, root, date, text} = req.body
      const reply = new Reply({owner, root, product, date, text})
      await reply.save()
      res
        .status(200)
        .json({
          status: 200,
          message: 'REPLY WAS PUSHED'
        })
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REPLY FAILED TO PUSH',
          error
        })
    }
  }

  async updateReply(req, res){
    try {
      const id = req.params.id

      await Reply.updateOne({_id: id}, req.body)

      res
        .status(200)
        .json({
          status: 200,
          message: 'REPLY WAS UPDATED'
        })

    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REPLY FAILED TO UPDATE',
          error
        })
    }
  }

  async deleteReply(req, res){
    try {
      const id = req.params.id

      await Reply.deleteOne({_id: id})

      res
        .status(200)
        .json({
          status: 200,
          message: 'REPLY WAS DELETED'
        })
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REPLY FAILED TO DELETE',
          error
        })
    }
  }
}

module.exports = RepliesNativeController
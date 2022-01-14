const Review = require("../../models/Review")

class ReviewsNativeController {
  async getReviews(req, res){
    try {
      const reviews = await Review.find({})
      res
        .status(200)
        .json(reviews)
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REVIEW FAILED TO GET',
          error
        })
    }
  }

  async pushReview(req, res){
    try {
      const {owner, product, date, text} = req.body
      const review = new Review({owner, product, date, text})
      await review.save()
      (await Review.find({owner, product, date, text})).populate('owner').exec()
      res
        .status(200)
        .json({
          status: 200,
          message: 'REVIEW WAS PUSHED'
        })
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REVIEW FAILED TO PUSH',
          error
        })
    }
  }

  async updateReview(req, res){
    try {
      const id = req.params.id

      await Review.updateOne({_id: id}, req.body)
      res
        .status(200)
        .json({
          status: 200,
          message: 'REVIEW WAS UPDATED'
        })
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REVIEW FAILED TO UPDATE',
          error
        })
    }
  }

  async deleteReview(req, res){
    try {
      const id = req.params.id

      await Review.deleteOne({_id: id})

      res
        .status(200)
        .json({
          status: 200,
          message: 'REVIEW WAS DELETED'
        })
    } catch (error) {
      res
        .status(400)
        .json({
          status: 400,
          message: 'REVIEW FAILED TO DELETE',
          error
        })
    }
  }
}

module.exports = ReviewsNativeController
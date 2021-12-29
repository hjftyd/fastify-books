// External Dependancies
const boom = require('boom')
const Comment = require('../models/Comment')


// Get single comment by ID
exports.getSingleComment = async (req, reply) => {
  try {
    const bookId = req.params.bookId;
    const comment = await Comment.find({bookId: bookId})
    return comment
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add new 
exports.addComment = async (req, reply) => {
  try {
    const comment = new Comment(req.body)
    return comment.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}



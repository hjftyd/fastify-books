// Import Controllers
const commentController = require ("../controllers/commentController")

const commentRoutes = [
  
  {
    method: 'GET',
    url: '/api/comments/:bookId',
    handler: commentController.getSingleComment
  },
  {
    method: 'POST',
    url: '/api/comments',
    handler: commentController.addComment
  }
]

module.exports = commentRoutes
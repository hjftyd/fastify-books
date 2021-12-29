// Import Controllers
const authorController = require("../controllers/authorController")

const routes = [
  {
    method: 'GET',
    url: '/api/authors',
    handler: authorController.getAuthors
  },
  {
    method: 'GET',
    url: '/api/authors/:id',
    handler: authorController.getSingleAuthor
  },
  {
    method: 'POST',
    url: '/api/authors',
    handler: authorController.addAuthor
    
  },
  {
    method: 'PUT',
    url: '/api/authors/:id',
    handler: authorController.updateAuthor
  },
  {
    method: 'DELETE',
    url: '/api/authors/:id',
    handler: authorController.deleteAuthor
  }
]

module.exports = routes
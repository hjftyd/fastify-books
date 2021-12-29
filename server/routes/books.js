// Import Controllers
const bookController = require ("../controllers/bookController")

const bookRoutes = [
  {
    method: 'GET',
    url: '/api/books',
    handler: bookController.getBooks
  },
  {
    method: 'GET',
    url: '/api/books/byId/:id',
    handler: bookController.getSingleBook
  },
  {
    method: 'POST',
    url: '/api/books',
    handler: bookController.addBook
    
  },
  {
    method: 'PUT',
    url: '/api/books/:id',
    handler: bookController.updateBook
  },
  {
    method: 'DELETE',
    url: '/api/books/:id',
    handler: bookController.deleteBook
  }
]

module.exports = bookRoutes
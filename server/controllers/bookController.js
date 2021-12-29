// External Dependancies
const boom = require('boom')

// Get Data Models
const Book = require('../models/Book')

// Get all 
exports.getBooks = async (req, reply) => {
  try {
    const books = await Book.find()
    return books
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single book by ID
exports.getSingleBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = await Book.findById(id)   
    return book
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add new 
exports.addBook = async (req, reply) => {
  try {
    const book = new Book(req.body)
    return book.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update 
exports.updateBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = req.body
    const { ...updateData } = book
    const update = await Book.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete 
exports.deleteBook = async (req, reply) => {
  try {
    const id = req.params.id
    const book = await Book.findByIdAndRemove(id)
    return book
  } catch (err) {
    throw boom.boomify(err)
  }
}
// External Dependancies
const boom = require('boom')

// Get Data Models
const Author = require('../models/Author')

// Get all authors
exports.getAuthors = async (req, reply) => {
  try {
    const authors = await Author.find()
    return authors
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single author by ID
exports.getSingleAuthor = async (req, reply) => {
  try {
    const id = req.params.id
    const author = await Author.findById(id)
    return author
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new author
exports.addAuthor = async (req, reply) => {
  try {
    const author = new Author(req.body)
    return author.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing author
exports.updateAuthor = async (req, reply) => {
  try {
    const id = req.params.id
    const author = req.body
    const { ...updateData } = author
    const update = await Author.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a author
exports.deleteAuthor = async (req, reply) => {
  try {
    const id = req.params.id
    const author = await Author.findByIdAndRemove(id)
    return author
  } catch (err) {
    throw boom.boomify(err)
  }
}
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  age: Number,
  books: String
})

module.exports = mongoose.model('Author', authorSchema)
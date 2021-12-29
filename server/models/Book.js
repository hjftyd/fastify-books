const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  commentId: { 
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  title: {
    type: String
  },
  year :{
    type: Number
  },
  author: {
    type: String
  }
})


module.exports = mongoose.model('Book', bookSchema)

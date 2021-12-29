const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
 bookId: {
  type: Schema.Types.ObjectId,
  ref: 'Book'
},
 content: {
  type: String,
  allowNull: false,
},
date: {
  type: Date,
  allowNull: false,
}
})

module.exports = mongoose.model('Comment', commentSchema)
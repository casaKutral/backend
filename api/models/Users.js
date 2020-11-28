const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
  id: {type: Schema.Types.ObjectId},
  name: String,
  email: String,
  phone: Number,
  workshopsBooked_ids: String
}))

module.exports = Users
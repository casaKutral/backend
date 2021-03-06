const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Teachers = mongoose.model('Teacher', new Schema({
  id: {type: Schema.Types.ObjectId},
  name: String,
  email: String,
  phone: Number,
  biography: String,
  subtitle: String,
  profile_picture: String,
  workshops_ids: Array,
}))

module.exports = Teachers
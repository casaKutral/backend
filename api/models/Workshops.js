const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workshops = mongoose.model('Workshop', new Schema({
  id: {type: Schema.Types.ObjectId},
  name: String,
  teacher_id: String,
  capacity: Number,
  reserved: Number,
  available: Number,
  date: Date,
  hours: Array,
  frecuency: Array,
  cost: Number,
  status: String,
  description: String
}))

module.exports = Workshops
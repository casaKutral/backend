const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Capacity = require('./WorkshopsCapacity')

const Workshops = mongoose.model('Workshop', new Schema({
  id: {type: Schema.Types.ObjectId},
  type: String,
  name: String,
  teacher_id: String,
  days: Array,
  cost: Number,
  status: String,
  description: String,
  pictureMobile: String,
  pictureDesktop: String,
  pictureBanner: String
}))

module.exports = Workshops
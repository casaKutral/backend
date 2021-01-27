const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dates = mongoose.model('Date', new Schema({
  id: {type: Schema.Types.ObjectId},
  workshop_id: String,
  total_capacity: Number,
  date: String,
  hour: String,
  booked: {
    pending: Number,
    confirmed: Number,
    available:Number
  }
}))

module.exports = Dates
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bookings = mongoose.model('Booking', new Schema({
  id: {type: Schema.Types.ObjectId},
  shortID : String,
  dates: Array,
  cost: Number,
  status: String,
  workshop_id: String,
  workshop_name: String,
  teacher_name: String,
  user_id: String,
  user_name: String,
  user_email: String,
  user_phone: Number
}))

module.exports = Bookings
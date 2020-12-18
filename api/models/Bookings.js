const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bookings = mongoose.model('Booking', new Schema({
  id: {type: Schema.Types.ObjectId},
  dates: Array,
  cost: Number,
  status: String,
  workshop_id: String,
  user_id: String,
  user_email: String,
  user_phone: Number
}))

module.exports = Bookings
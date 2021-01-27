const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cuposSchema = new Schema({
	reserved: Number,
	available: Number		
})
const hourSchema = new Schema({
	time: String,
	duration: String,
	cupos: [cuposSchema]
})

const WorkshopsCapacity = mongoose.model('WorkshopsCapacity', new Schema({
	date: String,
	hour: [hourSchema]
}))

module.exports = WorkshopsCapacity



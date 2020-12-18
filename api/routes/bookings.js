const express = require('express')
const router = express.Router()
const Bookings = require('../models/Bookings')

router.get('/', (request, response) => {
  Bookings.find()
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Bookings')
})

router.get('/:id', (request, response) => {
  Bookings.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Bookings')
})

router.post('/', (request, response) => {
  Bookings.create(request.body)
  .then(item => response.status(201).send(item))
  response.send('post data Bookings')
})

router.put('/:id', (request, response) => {
  Bookings.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('update data Bookings')
})

router.delete('/:id', (request, response) => {
  Bookings.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('delete data Bookings')
})

module.exports = router
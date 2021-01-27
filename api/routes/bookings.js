const express = require('express')
const router = express.Router()
const Bookings = require('../models/Bookings')

router.get('/', (request, response) => {
  Bookings.find()
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.get('/:id', (request, response) => {
  Bookings.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.post('/', (request, response) => {
  Bookings.create(request.body)
  .then(item => response.status(201).send(item))
})

router.put('/:id', (request, response) => {
  Bookings.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})
router.patch('/:id', (request, response) => {
  Bookings.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

router.delete('/:id', (request, response) => {
  Bookings.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

module.exports = router
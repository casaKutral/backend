const express = require('express')
const router = express.Router()
const Teachers = require('../models/Teachers')

router.get('/', (request, response) => {
  Teachers.find()
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.get('/:id', (request, response) => {
  Teachers.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.post('/', (request, response) => {
  Teachers.create(request.body)
  .then(item => response.status(201).send(item))
})

router.put('/:id', (request, response) => {
  Teachers.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

router.patch('/:id', (request, response) => {
  Teachers.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

router.delete('/:id', (request, response) => {
  Teachers.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

module.exports = router
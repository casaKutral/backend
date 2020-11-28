const express = require('express')
const router = express.Router()
const Teachers = require('../models/Teachers')

router.get('/', (request, response) => {
  Teachers.find()
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Teachers')
})

router.get('/:id', (request, response) => {
  Teachers.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Teachers')
})

router.post('/', (request, response) => {
  Teachers.create(request.body)
  .then(item => response.status(201).send(item))
  response.send('post data Teachers')
})

router.put('/:id', (request, response) => {
  Teachers.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('update data Teachers')
})

router.delete('/:id', (request, response) => {
  Teachers.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('delete data Teachers')
})

module.exports = router
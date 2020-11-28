const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.get('/', (request, response) => {
  Users.find()
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Users')
})

router.get('/:id', (request, response) => {
  Users.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
  response.send('get data Users')
})

router.post('/', (request, response) => {
  Users.create(request.body)
  .then(item => response.status(201).send(item))
  response.send('post data Users')
})

router.put('/:id', (request, response) => {
  Users.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('update data Users')
})

router.delete('/:id', (request, response) => {
  Users.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  response.send('delete data Users')
})

module.exports = router
const express = require('express')
const router = express.Router()
const Workshops = require('../models/Workshops')

router.get('/', (request, response) => {
  Workshops.find()
    .exec()
    .then(item => response.status(200).send(item)  )
  
})

router.get('/:id', (request, response) => {
  Workshops.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
  
})

router.post('/', (request, response) => {
  Workshops.create(request.body)
  .then(item => {
    console.log(request.body)
    response.status(201).send(item)
  })
  // response.send('post data workshops')
})

router.put('/:id', (request, response) => {
  Workshops.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  
})

router.delete('/:id', (request, response) => {
  Workshops.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  
})

module.exports = router
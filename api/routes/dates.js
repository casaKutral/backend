const express = require('express')
const router = express.Router()
const Dates = require('../models/Dates')

router.get('/', (request, response) => {
  Dates.find()
    .exec()
    .then(item => response.status(200).send(item)  )
  
})

router.get('/:id', (request, response) => {
  Dates.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
  
})

router.post('/', (request, response) => {
  Dates.create(request.body)
  .then(item => {
    console.log(request.body)
    response.status(201).send(item)
  })
  // response.send('post data Dates')
})

router.put('/:id', (request, response) => {
  Dates.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  
})
router.patch('/:id', (request, response) => {
  Dates.findByIdAndUpdate({ _id: request.params.id },
    {
      booked: request.body.booked,
    }, function (err, docs) {
      if (err) response.json(err);
      else {
        response.json({
          "message": "works!",
        });
      }
    });
})

router.delete('/:id', (request, response) => {
  Dates.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
  
})

module.exports = router
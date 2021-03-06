const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.get('/', (request, response) => {
  Users.find()
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.get('/:id', (request, response) => {
  Users.findById(request.params.id)
    .exec()
    .then(item => response.status(200).send(item)  )
})

router.post('/', (request, response) => {
  Users.create(request.body)
  .then(item => response.status(201).send(item))
})

router.put('/:id', (request, response) => {
  Users.findOneAndUpdate(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})
router.patch('/:id', (request, response) => {
  console.log(request.params.id, request.body)
  Users.findByIdAndUpdate({ _id: request.params.id },
    {
      bookings_ids: request.body.bookings_ids,
    }, function (err, docs) {
      if (err) response.json(err);
      else {
        response.json({
          "message": "works!",
        });
      }
    });
  // Users.findOneAndUpdate(request.params.id, request.body)
  // // Users.findOneAndUpdate(request.params.id, request.body)
  // .then(() => response.sendStatus(204))
})

router.delete('/:id', (request, response) => {
  Users.findOneAndDelete(request.params.id, request.body)
  .then(() => response.sendStatus(204))
})

module.exports = router
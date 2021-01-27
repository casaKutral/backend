const express = require('express')
const nodemailer = require('nodemailer');
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

router.post('/', async (request, response) => {
  Bookings.create(request.body)
  .then(item => response.status(201).send(item))
  response.send('post data Bookings')

  const { id, dates, cost, status, workshop_id, workshop_name, teacher_name, user_id, user_email, user_phone } = req.body;

    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>ID: ${id}</li>
            <li>Dates: ${dates}</li>
            <li>Cost: ${cost}</li>
            <li>Status: ${status}</li>
            <li>Workshop ID: ${workshop_id}</li>
            <li>Workshop name: ${workshop_name}</li>
            <li>Teacher Name: ${teacher_name}</li>
            <li>User ID: ${user_id}</li>
            <li>User Email: ${user_email}</li>
            <li>User Phone: ${user_phone}</li>
        </ul>
        <p>datos enviados para prueba</p>
    `;

    const transporter = nodemailer.createTransport({
      host: 'mail.casakutral.cl',
      port: 587,
      secure: false,
      auth: {
          user: 'adminti@casakutral.cl',
          pass: 'Kutral2020'
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  const info = await transporter.sendMail({
      from: "'Casa Kutral' <reservas@casakutral.cl>",
      to: 'andres.mardo@gmail.com',
      subject: 'formulario de cursos',
      html: contentHTML
  });
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
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

router.post('/',  (request, response) => {
  Bookings.create(request.body)
  .then(item => {      
    response.status(201).send(item)
  });
  const {  _id,dates, cost, status, workshop_name, teacher_name, user_email, user_phone } = request.body;
   
  var fechasMail = dates[0].date + " - " + dates[0].hour + "<br/>";
  for (let i = 1; i < dates.length; i++) {
    var fechasMail = fechasMail + dates[i].date + " - " + dates[i].hour + "<br/>";
  }
  
  const contentHTML = `
  <div id="primera" style="padding-left: 30%">
    <table style="width: 76px; height: 76px; left: 0px; top: 4px;">  
      <tr>
        <td>
          <a href="https://www.casakutral.cl/">
            <img src="../images/logo.png">
          </a>
        </td>
      </tr>
    </table>
    <table style="width: 50%; ">
      <tr>
        <td style="color: #EC6B80; font-family: Helvetica; font-style: italic; font-weight: bold; font-size: 18px; line-height: 23px; text-align: center;">
        <b>¡Estamos felices de verte por acá!</b>
        </td>            
      </tr>
    </table>
    <table style="width: 50%; margin-top: 15px">
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px;">
          Hemos recibido la solicitud de tu reserva exitosamente.
        </td>            
      </tr>
    </table>
    <table style="width: 315px;  margin-top: 15px">
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 17px; line-height: 20px; align-items: flex-end;">
          Taller
        </td>
        <td style="color: #5177CA; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px; align-items: center;">
          ${workshop_name}
        </td>
      </tr>
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 17px; line-height: 20px; align-items: flex-end;">
          Profesor
        </td>
        <td style="color: #5177CA; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px; align-items: center;">
          ${teacher_name}
        </td>
      </tr>   
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 17px; line-height: 20px; align-items: flex-end;">
          Fecha
        </td>
        <td style="color: #5177CA; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px; align-items: center;">
          ${fechasMail}
        </td>
      </tr>
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 17px; line-height: 20px; align-items: flex-end;">
          Precio
        </td>
        <td style="color: #5177CA; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px; align-items: center;">
          CLP ${cost}
        </td>
      </tr>
    </table>
    <table> 
      <tr style="position: absolute; width: 60%; height: 133px; left: 10px; top: 404px;">
        <td>
            <img src="">
        </td>
      </tr> 
    </table> 
    <table style="width: 50%; ">       
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 16px; line-height: 19px;">
        Para que se gestione por completo la reserva debes realizar la transferencia del monto total a la siguiente cuenta y en el comentario de esta poner tu “código de reserva”.
        </td>
      </tr> 
    </table>
    <table style="width: 50%;  ">
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 18px; line-height: 22px; ">
          <ul>
            <li style="list-style:none">Banco BCI</li>
            <li style="list-style:none">Cuenta Corriente</li>
            <li style="list-style:none">N° cuenta: 987654321</li>
            <li style="list-style:none">Rut: 23.258.654-7</li>
            <li style="list-style:none">Email: reservas@casakutral.cl</li>
          </ul>
        </td>
      </tr>
    </table>
    <table style="width: 50%; margin-top: 25px">
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 12px; line-height: 14px;">
          Código de reserva:
        </td>
      </tr>
      <tr style="background: #EC6B80; width: 25%; height: 46px; left: 10px; top: 845px;">
        <td style="color: #FFFFFF; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 22px; line-height: 26px; align-items: center; text-align: center; letter-spacing: 0.11em;">
          ${_id}
        </td>
      </tr>
    </table>
    <table style="width: 50%; ">
      <tr>
        <td>
            <img src="">
        </td>
      </tr>
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: bold; font-size: 14px; line-height: 111.3%;">
          Avenida Central 1335,
        </td>
      </tr>
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 13px; line-height: 111.3%;">
          Maitencillo, Puchuncaví, V región Valparaíso, Chile.
        </td>
      </tr>
    </table>
    <table style="width: 50%;  margin-top: 37px">
      <tr>
        <td style="color: #EC6B80; font-family: Helvetica; font-style: italic; font-weight: bold; font-size: 19px; line-height: 23px; text-align: center;">
        <b>¡Te estaremos esperando con muchas ganas!</b>
        </td>            
      </tr>
    </table>
    <table style="width: 50%;  margin-top: 60px">
      <tr>
        <td style="color: #00256A; font-family: Helvetica; font-style: normal; font-weight: normal; font-size: 12px; line-height: 111.3%;">
          Cualquier consulta o comentario no dudes en contactarnos ya sea por mail a <b>reservas@casakutral.cl</b> o a nuestro whatsapp <b>+56 9 49380469</b>.
        </td>            
      </tr>
    </table>
    <table style="width: 50%; ">
      <tr>
        <td >
          <img src="">
        </td> 
        <td >
          <img src="">
        </td>
        <td >
          <img src="">
        </td>
        <td >
          <img src="">
        </td>
        <td >
          <img src="">
        </td>           
      </tr>
    </table>
  </div>
  `;

  var transporter = nodemailer.createTransport({
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
  
  var mailOptions = {
    from: "'Casa Kutral' <reservas@casakutral.cl>",
    to: user_email,
    subject: 'formulario de cursos',
    html: contentHTML
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
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
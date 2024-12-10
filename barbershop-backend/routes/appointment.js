const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, date, service } = req.body;
  try {
    const appointment = new Appointment({
      name,
      date,
      service,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: 'Error creating appointment', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments); 
  } catch (error) {
    res.status(400).json({ message: 'Error fetching appointments', error });
  }
});

module.exports = router;

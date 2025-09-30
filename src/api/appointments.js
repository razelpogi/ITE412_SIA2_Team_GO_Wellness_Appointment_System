const express = require('express');
const router = express.Router();

let appointments = [
  { id: 1, studentId: 1, date: "2025-09-29", purpose: "Counseling" },
  { id: 2, studentId: 2, date: "2025-09-30", purpose: "Counseling" }
];

// GET /appointments
router.get('/', (req, res) => {
  res.json(appointments);
});

// POST /appointments
router.post('/', (req, res) => {
  const newAppointment = {
    id: appointments.length + 1,
    studentId: req.body.studentId,
    date: req.body.date,
    purpose: req.body.purpose
  };
  appointments.push(newAppointment);
  res.json(newAppointment);
});

module.exports = router;

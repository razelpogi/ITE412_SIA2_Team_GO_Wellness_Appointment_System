const express = require('express');
const router = express.Router();

let students = [
  { id: 1, name: "Jun Rey Paynandos", course: "BSIT", year: "4th Year" },
  { id: 2, name: "Razel Camoni", course: "BSIT", year: "4th Year" }
];

// GET /students
router.get('/', (req, res) => {
  res.json(students);
});

// POST /students
router.post('/', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course,
    year: req.body.year
  };
  students.push(newStudent);
  res.json(newStudent);
});

module.exports = router;

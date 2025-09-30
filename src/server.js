const express = require('express');
const app = express();

const studentsRoute = require('./api/students');
const appointmentsRoute = require('./api/appointments');

app.use(express.json());
app.use('/students', studentsRoute);
app.use('/appointments', appointmentsRoute);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

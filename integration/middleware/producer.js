const queue = [];

// Function to enqueue appointment requests
function sendAppointmentRequest(student, date, purpose) {
  const message = { student, date, purpose };
  queue.push(message);
  console.log(`Appointment request submitted:`, message);
}

// Example test messages
sendAppointmentRequest("Jun", "2025-10-01", "Counseling");
sendAppointmentRequest("Prynz", "2025-10-02", "Emotional Challenges");
sendAppointmentRequest("Manolo", "2025-10-03", "Stress Management");
sendAppointmentRequest("Razel S", "2025-10-04", "Relationship issue");

module.exports = queue;

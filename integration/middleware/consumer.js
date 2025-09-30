const queue = require('./producer');

// Function to process messages asynchronously
function processAppointments() {
  if (queue.length === 0) {
    console.log("No appointment requests to process.");
    return;
  }

  console.log("\nProcessing Appointment Requests...");
  while (queue.length > 0) {
    const request = queue.shift(); // dequeue
    const approved = request.purpose !== "Relationship issue"; // simple rule

    if (approved) {
      console.log(`Appointment for ${request.student} → Approved`);
    } else {
      console.log(`Appointment for ${request.student} → Rejected`);
    }
  }
}

setTimeout(processAppointments, 3000); // simulate async delay

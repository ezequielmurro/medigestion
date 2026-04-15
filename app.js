// app.js

// Patient Management
class Patient {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

let patients = [];

function addPatient(name, age) {
    const id = patients.length + 1;
    const newPatient = new Patient(name, age, id);
    patients.push(newPatient);
    console.log(`Patient added: ${newPatient.name}, ID: ${newPatient.id}`);
}

function getPatient(id) {
    return patients.find(patient => patient.id === id);
}

// Appointments
class Appointment {
    constructor(patientId, dateTime, type) {
        this.patientId = patientId;
        this.dateTime = dateTime;
        this.type = type;
    }
}

let appointments = [];

function scheduleAppointment(patientId, dateTime, type) {
    const appointment = new Appointment(patientId, dateTime, type);
    appointments.push(appointment);
    console.log(`Appointment scheduled for Patient ID: ${patientId} on ${dateTime}`);
}

// Notifications
function notify(patientId, message) {
    const patient = getPatient(patientId);
    if (patient) {
        console.log(`Notification for ${patient.name}: ${message}`);
    } else {
        console.log(`Patient with ID: ${patientId} not found.`);
    }
}

// Example usage
addPatient('John Doe', 30);
addPatient('Jane Smith', 28);
scheduleAppointment(1, '2026-04-15T10:00:00Z', 'Consultation');
notify(1, 'Your appointment is scheduled for 2026-04-15 at 10:00 AM.');
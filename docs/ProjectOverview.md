## 1. System Objectives
To simplify and automate the booking of appointments with the university guidance office, making the process more efficient for students and staff.

## 2. Proposed Scope
- User registration and login
- Appointment booking and scheduling
- Notification system
- Admin dashboard for managing bookings

## 3. Stakeholders
- Students (users booking appointments)
- Wellness counselors/staff (manage and approve bookings)

## 4. Tools/Technologies
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js / EXpress.js / React.js
- Database: MySQL / PostgreSQL / MongoDB / Firebase
- Version Control: Git/GitHub

## 5. High Level System Overview
The WellCare system is a web-based application designed to manage student wellness and counseling appointments at a university. It is built around three major modules that handle user interactions, appointment logistics, and administrative reporting.

### Major Modules/Subsystems
**User Management Module:** This module is the gateway to the system. It allows Users/Students to create and manage their accounts. This is where they submit personal information, track their wellness journey, and receive important notifications and confirmations. It authenticates users to ensure secure access.

**Appointment Scheduling Module:** This is the system's central function. It facilitates the entire appointment lifecycle, from a User/Student submitting an appointment request to a Counselor accepting it and documenting the session. This module manages counselor availability and sends automated updates and confirmations to all parties involved.

**Reporting Module:** This module provides an oversight and analytics capability for the system. It processes data from the other modules to generate crucial usage and administrative reports for the Administrative Staff.

### External Systems/Interfaces
The WellCare system interfaces with a few key components:

**Authentication Module:** The system provides a flexible authentication mechanism that supports both traditional email/password registration and login, as well as OAuth 2.0 integration with third-party identity providers such as Google. This approach allows students and counselors to securely create accounts or use existing credentials from trusted platform, ensuring both ease of access and robust security.

**Notifications API:** To send appointment confirmations and notifications, the system connects with an external API (e.g., Twilio for SMS or SendGrid for email) to ensure reliable delivery of messages to users and counselors.

**Database:** The system relies on a relational database (e.g., PostgreSQL or MySQL) to store all its data, including user profiles, wellness records, appointment schedules, and session notes.

### Data Flow Summary
Data enters the system from different external entities. A User/Student initiates the process by providing their information for account creation and submitting an appointment request. This data is processed by the User Management Module and the Appointment Scheduling Module, respectively, and stored in the Student Data Store. Counselors access their schedules and enter session notes, with this information being stored in the Counselor Data Store. The Reporting Module then accesses data from both the Student and Counselor Data Stores to compile reports. Finally, these reports are delivered to the Administrative Staff for review.

## 6. Integration Pattern
**Hub-Spoke**

### Rationale
The Hub-Spoke integration pattern best fits the WellCare system because all modules (User Management, Appointment Scheduling, Reporting) must communicate efficiently and consistently with shared services such as authentication, notifications, and the database. Using a central hub reduces direct dependencies between modules, simplifies maintenance, and allows the system to scale more easily as additional modules or external services are added.

## 7. Messaging Workflow
The Student Module and Appointment Management Module communicate through an asynchronous messaging workflow using a simple in-memory queue. When a student submits an appointment request (including their name, date, and purpose), the Student Module acts as a producer and sends the message into the queue. These requests are stored temporarily and processed later by the Appointment Module, which acts as a consumer. The consumer retrieves each message from the queue one by one and automatically approves or rejects the request based on predefined conditions (e.g., appointments for “Relationship issue” are rejected, while all others are approved). This setup demonstrates how message-oriented middleware enables asynchronous communication — the producer doesn’t need to wait for the consumer to process the request. As a result, both modules work independently while maintaining smooth data flow and reliability across the system.
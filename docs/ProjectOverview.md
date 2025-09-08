## 1. System Objectives
To simplify and automate the booking of appointments with the university student wellness office, making the process more efficient for students and staff.

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
- Backend: Laravel / Node.js / React / Django
- Database: MySQL / PostgreSQL / MongoDB / Firebase
- Version Control: Git/GitHub


##HIGH LEVEL SYSTEM OVERVIEW
The WellCare system is a web-based application designed to manage student wellness and counseling appointments at a university. It is built around three major modules that handle user interactions, appointment logistics, and administrative reporting.

Major Modules/Subsystems

User Management Module: This module is the gateway to the system. It allows Users/Students to create and manage their accounts. This is where they submit personal information, track their wellness journey, and receive important notifications and confirmations. It authenticates users to ensure secure access.

Appointment Scheduling Module: This is the system's central function. It facilitates the entire appointment lifecycle, from a User/Student submitting an appointment request to a Counselor accepting it and documenting the session. This module manages counselor availability and sends automated updates and confirmations to all parties involved.

Reporting Module: This module provides an oversight and analytics capability for the system. It processes data from the other modules to generate crucial usage and administrative reports for the Administrative Staff.

External Systems/Interfaces

The WellCare system interfaces with a few key components:

University Authentication Service: The system likely integrates with a university-wide single sign-on (SSO) or LDAP service to authenticate users, ensuring secure and seamless access for students and staff.

Notifications API: To send appointment confirmations and notifications, the system connects with an external API (e.g., Twilio for SMS or SendGrid for email) to ensure reliable delivery of messages to users and counselors.

Database: The system relies on a relational database (e.g., PostgreSQL or MySQL) to store all its data, including user profiles, wellness records, appointment schedules, and session notes.

Data Flow Summary

Data enters the system from different external entities. A User/Student initiates the process by providing their information for account creation and submitting an appointment request. This data is processed by the User Management Module and the Appointment Scheduling Module, respectively, and stored in the Student Data Store. Counselors access their schedules and enter session notes, with this information being stored in the Counselor Data Store. The Reporting Module then accesses data from both the Student and Counselor Data Stores to compile reports. Finally, these reports are delivered to the Administrative Staff for review.
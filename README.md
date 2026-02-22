# CGI Summer Internship Booking System 2026

## Overview
This project is a booking system developed for the CGI Summer Internship 2026 trial assignment. It consists of a Java Spring Boot backend (REST API) connected to a relational database, and a Nuxt.js frontend. The backend API serves as the single source of truth, providing all data management and business logic. The frontend communicates with the backend through REST API endpoints to display data, manage reservations, and handle user interactions. The system allows users to reserve tables, manage zones and features, and supports user authentication and role-based access.

## Features
- Table reservation management
- Zone and feature selection for tables
- User authentication and roles (admin, user)
- RESTful API endpoints
- Responsive frontend UI

## Backend (REST API)
The backend is a Spring Boot REST API that manages all application data and business logic through a relational database.

- **Framework:** Spring Boot
- **Location:** `Backend/`
- **Architecture:** REST API with integrated database
- **Entities:** Reservation, Table, User
- **Enums:** Zone, Feature, Roles
- **API Purpose:** Provides REST endpoints that the frontend consumes to perform all CRUD operations on tables, reservations, and user management
- **Database:** Relational database configured via `application.properties` - stores all application data (tables, reservations, users, zones, features)
- **Data Flow:** Frontend → REST API → Database (and vice versa)

### Running the Backend
1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
   ```
2. Build and run the application:
   ```sh
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
3. The backend will be available at `http://localhost:8080`.

## Frontend
- **Framework:** Nuxt.js
- **Location:** `Frontend/`
- **Features:** Table booking UI, authentication, zone/feature selection

### Running the Frontend
1. Navigate to the `Frontend` directory:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm dev
   ```
4. The frontend will be available at `http://localhost:3000`.

## Setup Instructions
1. Clone the repository.
2. Ensure Java 17+ and Node.js 18+ are installed.
3. Configure database settings in `Backend/src/main/resources/application.properties`.
4. Build and run both backend and frontend as described above.

## API Documentation
- The backend exposes REST endpoints for managing reservations, tables, and users.
- Example endpoints:
  - `GET /api/tables` — List all tables
  - `POST /api/reservations` — Create a reservation
  - `GET /api/users` — List users

## User Roles
- **Admin:** Can manage tables, reservations, and users
- **User:** Can book tables and view reservations

## Zones & Features
- **Zones:** Main, VIP, Terrace, Bar
- **Features:** Window, Booth, Outdoor, Accessible

## License
This project is for CGI Summer Internship trial purposes.

## Contact
For questions, contact the CGI internship coordinator.

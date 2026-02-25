# CGI Summer Internship Booking System 2026

## Overview
This project is a **restaurant table booking system** developed for the CGI Summer Internship 2026 trial assignment. It consists of a Java Spring Boot backend (REST API) connected to a relational database, and a Nuxt.js/Vue 3 frontend. The system provides an interactive floor plan for table management, real-time reservation tracking, and multi-zone support.

## Current Status

### ✅ Completed Features

#### Frontend
- **Interactive Floor Plan UI** - Visual representation of restaurant tables with positioning control
- **Labeled Zones** - Indoor, Terrace, Entrance, and Bar overlays with dashed borders
- **Table Management** - Add, remove, and configure tables with capacity, zones, and features
- **Reservation System** - Store and display reservations (dummy data)
- **Global Layout** - Header and footer navigation layout
- **Type-Safe Implementation** - Full TypeScript support with interfaces and enums
- **State Management** - Pinia stores for tables and reservations
- **Composables (Scaffolded)** - `useTable()` and `useReservation()` exist but are currently empty

#### Backend
- **REST API Structure** - Spring Boot with entity models
- **Data Models** - Reservation, Table, User entities
- **Enums** - Zone, Feature, Roles for property management

### 🔄 In Progress / TODO

- API Integration (frontend currently uses dummy data)
- Authentication and role-based access control
- Advanced filtering and search
- Booking confirmation emails
- Admin dashboard
- Database integration for real data persistence

## Architecture

### Frontend Stack
- **Framework:** Nuxt 3 with Vue 3 Composition API
- **State Management:** Pinia
- **Package Manager:** pnpm
- **Styling:** CSS with scoped styles
- **Language:** TypeScript

### Frontend Project Structure
```
Frontend/
├── app/
│   ├── assets/css/
│   │   ├── main.css          # Global styles
│   │   └── layout.css        # Layout and component styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.vue    # Navigation header with live clock
│   │   │   └── Footer.vue    # Footer with links and info
│   │   └── reservation/
│   │       ├── FloorPlan.vue # Interactive table floor plan
│   │       ├── TableCard.vue # Individual table component
│   │       └── ...          # Other reservation components
│   ├── composables/
│   │   ├── useTable.ts      # Table operations and state
│   │   └── useReservation.ts # Reservation operations and state
│   ├── layouts/
│   │   └── default.vue       # Main layout wrapper
│   ├── pages/
│   │   ├── index.vue         # Floor plan page
│   │   └── reservations/
│   │       └── index.vue     # Reservations list page
│   ├── stores/
│   │   ├── tableStore.ts     # Table state (Pinia)
│   │   └── reservationStore.ts # Reservation state (Pinia)
│   ├── types/
│   │   ├── entities/
│   │   │   ├── Table.ts
│   │   │   ├── Reservation.ts
│   │   │   └── User.ts
│   │   └── enums/
│   │       ├── Zone.ts       # MAIN, VIP, TERRACE, BAR
│   │       ├── Feature.ts    # Table features
│   │       └── Roles.ts      # User roles
├── public/                   # Static assets
├── nuxt.config.ts
├── package.json
└── README.md
```

### Backend Stack
- **Framework:** Spring Boot
- **Language:** Java
- **Build Tool:** Maven

### Backend Project Structure
```
Backend/
├── src/main/java/com/cgi/bookingsystem/
│   ├── BookingsystemApplication.java
│   ├── controllers/              # REST endpoints
│   ├── dtos/                     # Data transfer objects
│   ├── entities/
│   │   ├── Reservation.java
│   │   ├── Table.java
│   │   └── User.java
│   ├── enums/
│   │   ├── Feature.java
│   │   ├── Roles.java
│   │   └── Zone.java
│   ├── repos/                    # Database repositories
│   └── service/                  # Business logic services
├── src/main/resources/
│   └── application.properties    # Configuration
├── pom.xml
└── mvnw
```

## Key Features Details

### 1. **Floor Plan**
- Interactive visual representation of restaurant layout
- Tables positioned using x/y coordinates
- **Labeled Zones** - Indoor, Terrace, Entrance, and Bar overlays for layout guidance
- Visual states: Available (gray), Occupied (dark gray), Recommended (red), Selected (blue)
- Legend showing status meanings
- Centered responsive design

### 2. **Reservation Management**
- Create new reservations with automatic time slot validation
- Support for pending, confirmed, and cancelled statuses
- Store reservations by date, time, and table
- Track guest count and customer information
- Optional reservation notes

### 3. **Table Management**
- Configure tables with:
  - Capacity (determines seating arrangement)
  - Zone (MAIN, VIP, TERRACE, BAR)
  - Special features
  - Positioning on floor plan
- Automatic chair rendering based on capacity
- Hover tooltips showing table info and reservation details

### 4. **Global Navigation**
- Persistent header with restaurant branding
- Main navigation (to / and /reservations)
- Time display placeholder in header
- Sign In button (placeholder)
- Footer with quick links and contact info

## Running the Application

### Prerequisites
- Node.js 18+
- pnpm
- Java 11+
- Maven

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server (runs on `http://localhost:3000`):
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd Backend
```

2. Configure database in `src/main/resources/application.properties`

3. Build and run:
```bash
./mvnw clean install
./mvnw spring-boot:run
```

Backend runs on `http://localhost:8080`

## Data Models

### Table Interface
```typescript
{
  id: number
  tableNumber: number
  capacity: number              // 2, 4, 6, etc.
  zone: Zone                    // MAIN | VIP | TERRACE | BAR
  features: Feature[]           // Special attributes
  xPosition: number             // X coordinate (0-900px)
  yPosition: number             // Y coordinate (0-600px)
}
```

### Reservation Interface
```typescript
{
  id: number
  table: Table
  userId: number
  date: Date
  startTime: string             // HH:mm format
  endTime: string               // HH:mm format
  reservationSize: number       // Guest count
  status: 'pending' | 'confirmed' | 'cancelled'
  customerName: string
  customerEmail: string
  notes?: string
}
```

### Zone Enum
- `MAIN` - Main dining area
- `VIP` - Premium seating
- `TERRACE` - Outdoor seating
- `BAR` - Bar counter seating

## Usage Examples

### Adding a Table
Edit `Frontend/app/stores/tableStore.ts`:
```typescript
{ 
  id: 6, 
  tableNumber: 6, 
  capacity: 4, 
   zone: 'MAIN', 
  features: [], 
  xPosition: 350, 
  yPosition: 220 
}
```

## Current Limitations

- ⚠️ Using dummy/mock data (not connected to backend API)
- ⚠️ Authentication not implemented
- ⚠️ No persistent data storage (resets on page refresh)
- ⚠️ Limited to frontend validation only
- ⚠️ Email notifications not implemented

## Next Steps

1. **API Integration**
   - Connect frontend stores to backend REST endpoints
   - Implement fetch methods in table and reservation stores

2. **Authentication**
   - Add login/logout functionality
   - Implement JWT token management
   - Add role-based access control

3. **Enhanced UI**
   - Add reservation booking form
   - Implement date picker for bookings
   - Create admin dashboard

4. **Backend Completion**
   - Implement all REST endpoints
   - Add database validation
   - Set up error handling

5. **Deployment**
   - Configure production builds
   - Set up CI/CD pipeline
   - Deploy to hosting platform

## Development Notes

- Types are located in `Frontend/app/types/` for type safety
- Styles are organized in `Frontend/app/assets/css/`
- All state management is centralized in Pinia stores
- Composables are scaffolded and currently empty
## Contributors
- CGI Summer Internship 2026 Project

## License
This project is part of the CGI Summer Internship 2026 trial assignment.

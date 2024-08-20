## Tech Stack

- **Node.js**
- **TypeScript**
- **Fastify**
- **Prisma**
- **PostgreSQL**
- **Docker**
- **Supabase**

## Project Overview

This project showcases a robust implementation of a **microservices architecture** within a **monorepo**. It consists of three core services, each meticulously designed to handle specific business functions:

### Account Service

- **Responsibilities**:
  - User registration and authentication
  - Account creation
  - Transaction history retrieval
- **Role**: Acts as the backbone of user management and security within the system.

### Payment Service

- **Responsibilities**:
  - Handling send operations
  - Managing withdraw operations
- **Role**: Serves as the heart of the application's business logic, ensuring seamless financial transactions.

### Schema Repository

- **Responsibilities**:
  - Centralized management of shared schemas across services
  - Ensuring consistency in data models
- **Role**: Embodies the **DRY** (Don't Repeat Yourself) principle, preventing discrepancies and fostering a cohesive and maintainable codebase.

## Architecture

- **Microservices**: The project is divided into distinct services, each responsible for a specific domain of the application.
- **Monorepo**: All services are housed within a single repository, facilitating shared tooling, consistent development practices, and simplified dependency management.

## Getting Started

Kickstart your journey with this project by following these simple steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mrspec7er/be-assignment

   ```

2. **Build the Docker Containers**:

   ```bash
   docker compose build
   ```

3. **Launch the Services**:

   ```bash
   docker compose up -d
   ```

4. **Access the Services**:

   - Visit the Account Service at http://localhost:3000
   - Access the Payment Service at http://localhost:3001

5. **Explore the API**:
   Dive into the API documentation. Find all the details in the openapi.json file, which is your go-to guide for interfacing with these services.

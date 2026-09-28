# Employee Management System

A full-stack Employee Management System built using **Java, Spring Boot, MySQL, and React**. The application provides secure employee management with JWT authentication, department management, CRUD operations, validation, exception handling, and a responsive React frontend.

## Features

- User login with JWT authentication
- Protected REST APIs
- Employee CRUD operations
  - Create employee
  - View employees
  - Update employee
  - Delete employee
- Department management
- Employee–Department relationship using JPA
- Request validation
- Global exception handling
- Custom exceptions
- CORS configuration
- React frontend
- Responsive and clean user interface
- Success and error handling
- Salary formatting
- Logout functionality

## Tech Stack

### Backend
- Java 21
- Spring Boot 4.1.1
- Spring MVC
- Spring Data JPA
- Spring Security
- JWT
- Hibernate
- MySQL
- Maven

### Frontend
- React
- JavaScript
- Vite
- HTML
- CSS

### Development Tools
- Visual Studio Code
- Postman
- Git
- GitHub

## Project Architecture

```text
Employee Management System/
│
├── backend/
│   └── employee-management-system/
│       ├── src/
│       │   └── main/
│       │       └── java/
│       │           └── com/ajubravin/employeemanagementsystem/
│       │               ├── config/
│       │               ├── controller/
│       │               ├── dto/
│       │               ├── entity/
│       │               ├── exception/
│       │               ├── repository/
│       │               ├── security/
│       │               └── service/
│       │
│       └── pom.xml
│
├── frontend/
│   └── employee-management-frontend/
│       ├── src/
│       │   ├── components/
│       │   └── services/
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

## Backend Architecture

The backend follows a layered architecture:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
MySQL Database
```

### Main Layers

**Controller**
- Handles HTTP requests and responses
- Provides REST API endpoints

**Service**
- Contains business logic
- Handles employee and department operations

**Repository**
- Uses Spring Data JPA
- Communicates with the database

**Entity**
- Represents database tables

**DTO**
- Controls the data received from API requests
- Separates request data from database entities

**Exception**
- Handles application-specific exceptions
- Provides meaningful error responses

**Security**
- Handles JWT generation and authentication
- Protects application APIs

## Database Design

The application uses MySQL with two main entities:

```text
Department
-----------
id
name

Employee
--------
id
name
email
department_id
salary
```

Relationship:

```text
Department 1 ──────── * Employee
```

One department can have multiple employees.

## REST API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Authenticate user and generate JWT |

### Employees

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

### Departments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/departments` | Get all departments |
| POST | `/api/departments` | Create department |

Protected endpoints require:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Authentication

The application uses **JWT-based authentication**.

Login flow:

```text
React Login Page
       ↓
POST /api/auth/login
       ↓
Spring Boot
       ↓
JWT Token Generated
       ↓
Token Stored in Browser
       ↓
Token Sent With API Requests
       ↓
JWT Authentication Filter
       ↓
Protected API Access
```

The JWT secret is stored outside the source code using the `JWT_SECRET` environment variable.

## Validation

Employee requests use Jakarta Bean Validation.

Examples:

- Employee name cannot be blank
- Email must be valid
- Department is required
- Salary must be at least ₹10,000

Example validation response:

```json
{
  "name": "Name is required",
  "email": "Enter a valid email"
}
```

## Exception Handling

The application uses `@RestControllerAdvice` for centralized exception handling.

Custom exceptions include:

- `EmployeeNotFoundException`
- `DepartmentNotFoundException`

Validation errors are also processed centrally using `MethodArgumentNotValidException`.

## Frontend

The React application provides:

- Login page
- Employee dashboard
- Add employee form
- Employee table
- Edit employee functionality
- Delete employee functionality
- Department selection
- Logout
- JWT token handling
- Success messages
- Responsive layout

The frontend communicates with the Spring Boot backend through REST APIs.

## Running the Application Locally

### Prerequisites

Make sure the following are installed:

- Java 21
- Maven
- MySQL
- Node.js and npm
- Git

### 1. Create the Database

Create the MySQL database:

```sql
CREATE DATABASE employee_management;
```

### 2. Configure Environment Variables

Set your MySQL password and JWT secret as environment variables.

Example:

```bash
export DB_PASSWORD='your_mysql_password'
export JWT_SECRET='your_generated_secret'
```

Do not commit real passwords or secret keys to GitHub.

### 3. Start the Backend

Open Terminal:

```bash
cd "/Users/ajubravin/Projects/Employee Management System/backend/employee-management-system"
```

Then run:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 4. Start the Frontend

Open another Terminal window:

```bash
cd "/Users/ajubravin/Projects/Employee Management System/frontend/employee-management-frontend"
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Demo Login

For the current portfolio demonstration:

```text
Username: admin
Password: admin123
```

> This authentication is implemented as a simple demonstration mechanism. A production application should use database-backed users, securely hashed passwords, and proper user/role management.

## Security Considerations

- JWT secret is stored as an environment variable.
- Database password is stored as an environment variable.
- Sensitive configuration is excluded from Git using `.gitignore`.
- Protected APIs require JWT authentication.
- CORS is configured for the React frontend.

## Future Improvements

Possible future enhancements include:

- Database-backed user authentication
- Role-based authorization
- Pagination and sorting
- Employee search and filtering
- Improved API error response structure
- Refresh tokens
- Password hashing and user management
- Production deployment
- Automated testing
- Dockerization

## Author

**Aju Bravin**

Java Full Stack Developer — Portfolio Project
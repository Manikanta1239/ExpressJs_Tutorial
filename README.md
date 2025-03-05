# Express.js Tutorial Project

## 📋 Project Overview
A comprehensive Express.js tutorial project demonstrating various concepts including controllers, routes, and CRUD operations.

## 📁 Project Structure
```plaintext
ExpressJs_Tutorial/
├── controllersExpress/
│   ├── controller1.js
│   ├── controller2.js
│   ├── index1.js
│   └── index2.js
├── crud_operations/
│   └── index.js
├── demoExpress/
│   └── index.js
├── multi_single_routes/
│   └── index.js
├── routesExpress/
│   ├── controller.js
│   ├── index.js
│   └── route.js
└── README.md
```

## 📚 Tutorial Sections

### 1. Demo Express (demoExpress)
Basic Express.js setup and implementation demonstrating:
- Server setup
- Basic routing
- Middleware usage
- Request handling

### 2. Controllers (controllersExpress)
Demonstrates controller implementation with:
- Multiple controller files
- Separation of concerns
- Route handling in controllers

### 3. Routes (routesExpress)
Shows routing implementation including:
- Route organization
- Controller integration
- Route parameters
- Query handling

### 4. CRUD Operations (crud_operations)
Complete CRUD implementation showing:
- Create operations
- Read operations
- Update operations
- Delete operations

### 5. Multiple Routes (multi_single_routes)
Demonstrates different routing approaches:
- Single route files
- Multiple route handling
- Route organization

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript

## 📌 Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## ⚙️ Installation & Setup

1. Clone the repository
```bash
git clone <repository-url>
cd ExpressJs_Tutorial
```

2. Install dependencies for each section
```bash
# For demo express
cd demoExpress
npm install

# For CRUD operations
cd ../crud_operations
npm install

# Repeat for other sections as needed
```

3. Running the examples
```bash
# For demo express
cd demoExpress
node index.js

# For CRUD operations
cd ../crud_operations
node index.js

# For controllers example
cd ../controllersExpress
node index1.js
# or
node index2.js

# For routes example
cd ../routesExpress
node index.js

# For multiple routes example
cd ../multi_single_routes
node index.js
```

## 📝 Section Details

### Demo Express
- Basic Express server setup
- Request handling
- Response sending
- Middleware implementation

### Controllers Express
- Controller pattern implementation
- Multiple controller handling
- Request processing in controllers
- Response formatting

### Routes Express
- Route organization
- Controller integration
- Request parameter handling
- Query string processing

### CRUD Operations
- Complete CRUD API implementation
- Data handling
- Request validation
- Response formatting

### Multiple/Single Routes
- Different routing approaches
- Route organization patterns
- Request handling methods
- Response management


## ❗ Important Notes
- Each section is independent and has its own `package.json`
- Run `npm install` in each directory before running examples
- Make sure Node.js and npm are properly installed
- Check each section's specific README for detailed instructions
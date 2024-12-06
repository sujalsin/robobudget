# RoboBudget - Personal Finance Assistant

RoboBudget is a modern personal finance application that helps users track expenses, manage budgets, and make informed financial decisions.

## 🏗 Project Architecture

```mermaid
graph TB
    subgraph Frontend
        UI[React UI]
        RC[React Components]
        RQ[React Query]
        CTX[Context API]
    end
    
    subgraph Backend Services
        AS[Auth Service]
        ES[Expense Service]
        BS[Budget Service]
        CS[Category Service]
    end
    
    subgraph Database
        PG[(PostgreSQL)]
    end
    
    UI --> RC
    RC --> RQ
    RC --> CTX
    RQ --> AS
    RQ --> ES
    RQ --> BS
    RQ --> CS
    AS --> PG
    ES --> PG
    BS --> PG
    CS --> PG
```

## 🚀 Features

### Authentication & User Management
- Secure user registration and login
- JWT-based authentication
- Protected routes and API endpoints

### Expense Tracking
- Add, edit, and delete expenses
- Categorize expenses
- View expense history
- Filter and sort expenses

### Budget Management
- Set monthly budgets
- Track budget vs actual spending
- Budget alerts and notifications
- Category-wise budget allocation

### Dashboard & Analytics
- Monthly spending overview
- Category-wise expense breakdown
- Income vs Expense visualization
- Spending trends analysis

## 💻 Technology Stack

### Frontend
- React with TypeScript
- Material-UI for styling
- React Query for data fetching
- Context API for state management
- Recharts for data visualization

### Backend
- Ruby on Rails API
- JWT authentication
- PostgreSQL database
- RESTful API design

## 🎯 Example Scenarios

### 1. Expense Tracking
```mermaid
sequenceDiagram
    User->>Frontend: Add new expense
    Frontend->>Backend: POST /api/expenses
    Backend->>Database: Save expense
    Database-->>Backend: Confirm save
    Backend-->>Frontend: Return expense data
    Frontend-->>User: Show success message
```

### 2. Budget Management
```mermaid
sequenceDiagram
    User->>Frontend: Set monthly budget
    Frontend->>Backend: POST /api/budgets
    Backend->>Database: Save budget
    Backend-->>Frontend: Return budget data
    Frontend->>Backend: GET /api/expenses/monthly
    Backend-->>Frontend: Return monthly expenses
    Frontend-->>User: Show budget vs actual
```

### 3. Category Analysis
```mermaid
sequenceDiagram
    User->>Frontend: View category breakdown
    Frontend->>Backend: GET /api/expenses/by-category
    Backend->>Database: Query expenses
    Database-->>Backend: Return data
    Backend-->>Frontend: Send categorized data
    Frontend-->>User: Display pie chart
```

## 🛠 Setup & Installation

### Prerequisites
- Node.js >= 14
- Ruby 2.6.10
- PostgreSQL >= 12
- Yarn or npm

### Frontend Setup
```bash
cd frontend-web
yarn install
yarn start
```

### Backend Setup
```bash
cd services/auth_service
bundle install
rails db:create db:migrate
rails s -p 3001
```


### Dashboard
![Dashboard](docs/images/dashboard.png)
- Monthly overview
- Recent transactions
- Budget status

### Expense Management
![Expenses](docs/images/expenses.png)
- Transaction list
- Add/Edit expenses
- Category filters

### Budget Planning
![Budget](docs/images/budget.png)
- Budget allocation
- Spending limits
- Category budgets

## 🔒 Security

- JWT-based authentication
- Password encryption
- CORS protection
- API rate limiting
- Input validation

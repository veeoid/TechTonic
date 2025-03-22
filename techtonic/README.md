# TechTonic - Business Management System

TechTonic is a modern, full-stack business management system built with Angular 19 and .NET Core Web API. It provides a comprehensive solution for managing customers, inventory, and business analytics.

## Features

### Customer Management
- Add, edit, and delete customer records
- View customer details including registration dates
- Track customer growth over time

### Inventory Management
- Manage product inventory
- Track stock levels
- Categorize products
- Monitor inventory value

### Analytics Dashboard
- Real-time business metrics
- Customer growth visualization
- Inventory distribution analysis
- Total inventory value tracking
- Recent customer activity

## Tech Stack

### Frontend
- Angular 19
- TypeScript
- Bootstrap 5
- Chart.js for data visualization
- NgBootstrap for UI components

### Backend
- .NET Core Web API
- Entity Framework Core
- SQL Server Database
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- .NET 8 SDK
- SQL Server
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/veeoid/TechTonic.git
```

2. Frontend Setup:
```bash
cd techtonic
npm install
ng serve
```

3. Backend Setup:
```bash
cd TechTonicAPI
dotnet restore
dotnet run
```

4. Database Setup:
- Update the connection string in `TechTonicAPI/appsettings.json`
- Run database migrations:
```bash
dotnet ef database update
```

## API Endpoints

### Customer API
- GET /api/Customer - Get all customers
- POST /api/Customer - Create new customer
- PUT /api/Customer - Update customer
- DELETE /api/Customer - Delete customer

### Inventory API
- GET /api/Inventory - Get all inventory items
- POST /api/Inventory - Add new inventory item
- PUT /api/Inventory - Update inventory item
- DELETE /api/Inventory - Delete inventory item

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Angular team for the amazing framework
- Bootstrap team for the UI components
- Chart.js team for the visualization library

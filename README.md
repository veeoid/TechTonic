# TechTonic - Modern Business Management System

<div align="center">
  <img src="techtonic/src/assets/logo.png" alt="TechTonic Logo" width="200"/>
  
  [![Angular](https://img.shields.io/badge/Angular-19.0.0-red.svg)](https://angular.io/)
  [![.NET](https://img.shields.io/badge/.NET-8.0-blue.svg)](https://dotnet.microsoft.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  A full-stack business management solution built with Angular 19 and .NET Core Web API
</div>

## 🌟 Overview

TechTonic is a comprehensive business management system that helps organizations streamline their operations through efficient customer management, inventory tracking, and business analytics. The system provides a modern, intuitive interface for managing all aspects of your business operations.

## 🚀 Features

### 👥 Customer Management
- Complete customer lifecycle management
- Customer registration and profile management
- Customer activity tracking
- Registration date tracking
- Customer growth analytics

### 📦 Inventory Management
- Real-time inventory tracking
- Stock level monitoring
- Product categorization
- Price management
- Inventory value calculation

### 📊 Analytics Dashboard
- Real-time business metrics
- Interactive data visualizations
- Customer growth trends
- Inventory distribution analysis
- Total inventory value tracking
- Recent customer activity monitoring

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 19
- **Language**: TypeScript
- **UI Components**: 
  - Bootstrap 5
  - NgBootstrap
- **Data Visualization**: Chart.js
- **State Management**: Angular Services
- **HTTP Client**: Angular HttpClient

### Backend
- **Framework**: .NET Core Web API
- **Database**: SQL Server
- **ORM**: Entity Framework Core
- **API Documentation**: Swagger
- **Authentication**: JWT (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- .NET 8 SDK
- SQL Server
- Angular CLI

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/veeoid/TechTonic.git
cd TechTonic
```

2. **Frontend Setup**
```bash
cd techtonic
npm install
ng serve
```
The frontend will be available at `http://localhost:4200`

3. **Backend Setup**
```bash
cd TechTonicAPI
dotnet restore
dotnet run
```
The API will be available at `https://localhost:7224`

4. **Database Setup**
- Update the connection string in `TechTonicAPI/appsettings.json`
- Run database migrations:
```bash
dotnet ef database update
```

## 📚 Project Structure

```
TechTonic/
├── techtonic/                 # Frontend Angular Application
│   ├── src/
│   │   ├── app/              # Application Components
│   │   ├── assets/           # Static Assets
│   │   └── styles/           # Global Styles
│   └── package.json          # Frontend Dependencies
│
└── TechTonicAPI/             # Backend .NET Core API
    ├── Controllers/          # API Controllers
    ├── Models/               # Data Models
    ├── Services/             # Business Logic
    └── Data/                 # Database Context
```

## 🔌 API Documentation

### Customer Endpoints
- `GET /api/Customer` - Retrieve all customers
- `POST /api/Customer` - Create new customer
- `PUT /api/Customer` - Update customer
- `DELETE /api/Customer` - Delete customer

### Inventory Endpoints
- `GET /api/Inventory` - Get all inventory items
- `POST /api/Inventory` - Add new inventory item
- `PUT /api/Inventory` - Update inventory item
- `DELETE /api/Inventory` - Delete inventory item

For detailed API documentation, visit the Swagger UI at `https://localhost:7224/swagger` when running the API.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Angular](https://angular.io/) team for the amazing framework
- [Bootstrap](https://getbootstrap.com/) team for the UI components
- [Chart.js](https://www.chartjs.org/) team for the visualization library
- [.NET](https://dotnet.microsoft.com/) team for the robust backend framework

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

<div align="center">
  Made with ❤️ by the TechTonic Team
</div> 
# TechTonic API

This is the backend API for the TechTonic Business Management System, built with .NET Core Web API.

## Features

- RESTful API endpoints for customer and inventory management
- Entity Framework Core for database operations
- SQL Server database integration
- Swagger documentation
- CORS configuration for frontend integration

## API Documentation

### Customer Endpoints

#### GET /api/Customer
Retrieves all customers.

**Response:**
```json
[
  {
    "customerId": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "registrationDate": "datetime"
  }
]
```

#### POST /api/Customer
Creates a new customer.

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string"
}
```

#### PUT /api/Customer
Updates an existing customer.

**Request Body:**
```json
{
  "customerId": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string"
}
```

#### DELETE /api/Customer
Deletes a customer by ID.

### Inventory Endpoints

#### GET /api/Inventory
Retrieves all inventory items.

**Response:**
```json
[
  {
    "inventoryId": "string",
    "name": "string",
    "category": "string",
    "quantity": "number",
    "price": "number"
  }
]
```

#### POST /api/Inventory
Creates a new inventory item.

**Request Body:**
```json
{
  "name": "string",
  "category": "string",
  "quantity": "number",
  "price": "number"
}
```

#### PUT /api/Inventory
Updates an existing inventory item.

**Request Body:**
```json
{
  "inventoryId": "string",
  "name": "string",
  "category": "string",
  "quantity": "number",
  "price": "number"
}
```

#### DELETE /api/Inventory
Deletes an inventory item by ID.

## Setup Instructions

1. Clone the repository
2. Update the connection string in `appsettings.json`
3. Run database migrations:
```bash
dotnet ef database update
```
4. Run the API:
```bash
dotnet run
```

## Database Schema

### Customer Table
- CustomerId (Primary Key)
- FirstName
- LastName
- Email
- Phone
- RegistrationDate

### Inventory Table
- InventoryId (Primary Key)
- Name
- Category
- Quantity
- Price

## Development

### Prerequisites
- .NET 8 SDK
- SQL Server
- Entity Framework Core CLI

### Running Migrations
```bash
dotnet ef migrations add MigrationName
dotnet ef database update
```

### Running Tests
```bash
dotnet test
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License. 
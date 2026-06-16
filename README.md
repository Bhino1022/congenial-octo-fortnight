# Congenial Octo Fortnight

A modern, production-ready TypeScript/Node.js project with Express API, MongoDB integration, CI/CD, and comprehensive documentation.

## Features

- 🦾 **TypeScript** - Strict type checking for safer code
- 🚀 **Express API** - RESTful API with middleware and error handling
- 🗄️ **MongoDB** - Database integration with Mongoose models
- 🧪 **Jest** - Comprehensive testing framework
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🔄 **GitHub Actions** - Automated CI/CD pipeline
- 📦 **Docker Ready** - Container deployment support
- 📚 **Full Documentation** - API docs, deployment guides, and more

## Quick Start

### Prerequisites

- Node.js v18+ and npm
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Bhino1022/congenial-octo-fortnight.git
cd congenial-octo-fortnight

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URL

# Start the development server
npm start
```

### Development

```bash
npm start              # Run development server
npm test               # Run tests
npm run build          # Compile TypeScript
npm run lint           # Check code quality
npm run format         # Auto-format code
npm run dev            # Run utility functions demo
```

## API Endpoints

### Health Check
```
GET /health
```
Returns server health status and uptime.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-06-16T17:26:25.761Z",
  "uptime": 18.99
}
```

### Math Operations

#### Add
```
POST /api/math/add
```
Add two numbers.

**Request Body:**
```json
{
  "a": 10,
  "b": 5
}
```

**Response:**
```json
{
  "operation": "add",
  "a": 10,
  "b": 5,
  "result": 15
}
```

#### Subtract
```
POST /api/math/subtract
```
Subtract two numbers.

**Request Body:**
```json
{
  "a": 10,
  "b": 3
}
```

**Response:**
```json
{
  "operation": "subtract",
  "a": 10,
  "b": 3,
  "result": 7
}
```

### Greeting
```
POST /api/greet
```
Generate a greeting message.

**Request Body:**
```json
{
  "name": "John"
}
```

**Response:**
```json
{
  "message": "Hello, John!"
}
```

## Project Structure

```
.
├── src/
│   ├── config/          # Configuration files
│   │   └── database.ts  # MongoDB connection
│   ├── middleware/      # Express middleware
│   │   └── errorHandler.ts
│   ├── models/          # Mongoose models
│   │   ├── User.ts
│   │   └── Task.ts
│   ├── routes/          # API routes
│   │   ├── api.ts
│   │   └── health.ts
│   ├── utils/           # Utility functions
│   ├── __tests__/       # Test files
│   ├── index.ts         # Utility demo
│   └── server.ts        # Express server
├── dist/                # Compiled JavaScript
├── .github/workflows/   # CI/CD pipelines
├── .env                 # Environment variables
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── README.md            # This file
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/congenial-octo-fortnight
```

For production, use MongoDB Atlas:
```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

## Testing

The project includes comprehensive test coverage with 23+ test cases covering:
- ✅ Math utility functions
- ✅ Health check endpoint
- ✅ API endpoints (add, subtract, greet)
- ✅ Error handling and validation
- ✅ Request/response validation

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- math.test.ts

# Run with coverage
npm test -- --coverage
```

**Test Coverage:**
- `src/__tests__/math.test.ts` - Utility function tests
- `src/__tests__/api.test.ts` - API endpoint integration tests

New tests verify:
- Correct mathematical operations
- Proper error handling for invalid inputs
- HTTP status codes and response formats
- Edge cases (negative numbers, missing fields, type validation)

## Docker

Build and run the application in Docker:

### Building the Image

```bash
# Build the image
npm run build
docker build -t congenial-octo-fortnight:latest .

# Or use docker-compose to include MongoDB
docker-compose up --build
```

### Running with Docker Compose

```bash
# Start both app and MongoDB
docker-compose up

# Run in detached mode
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f app
```

The docker-compose setup provides:
- Node.js application on port 3000
- MongoDB database on port 27017
- Automatic health checks
- Volume persistence for MongoDB data

### Docker Production

For production, the Dockerfile:
- Uses Alpine Linux (small base image)
- Installs only production dependencies
- Includes health check endpoint
- Exposes port 3000
- Runs with Node.js 20

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start:prod
```

The compiled JavaScript files will be in the `dist/` directory.

## Deployment

### Heroku Deployment

Use the provided deployment script for automated Heroku setup:

```bash
# Make script executable
chmod +x scripts/deploy-heroku.sh

# Run deployment script
./scripts/deploy-heroku.sh

# Or with dry-run to preview changes
./scripts/deploy-heroku.sh --dryrun
```

The script:
- ✅ Validates Heroku CLI and authentication
- ✅ Checks git status and current branch
- ✅ Validates app name format
- ✅ Configures MongoDB Atlas connection
- ✅ Sets production environment variables
- ✅ Provides deployment summary
- ✅ Requires confirmation before deploying

Manual Heroku deployment:

```bash
heroku login
heroku create your-app-name

# Set MongoDB Atlas URL from https://www.mongodb.com/cloud/atlas
heroku config:set DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/db?retryWrites=true&w=majority

heroku config:set NODE_ENV=production
git push heroku main

# View logs
heroku logs --tail

# Open app
heroku open
```

### Docker-based Deployment

Push to Docker registry:

```bash
npm run build
docker build -t your-registry/congenial-octo-fortnight:latest .
docker push your-registry/congenial-octo-fortnight:latest
```

### AWS, DigitalOcean, and other platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for other platforms.

## CI/CD Pipeline

This project includes a GitHub Actions workflow that automatically:
- ✅ Runs tests on every push and pull request
- ✅ Checks code quality with ESLint
- ✅ Verifies TypeScript compilation
- ✅ Performs security audits
- ✅ Builds artifacts for deployment

See [.github/workflows/ci.yml](./.github/workflows/ci.yml) for details.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:
- Code style and conventions
- Testing requirements
- Pull request process
- Development workflow

## Architecture

### Tech Stack

- **Runtime:** Node.js 20+ (Alpine Linux in Docker)
- **Language:** TypeScript 5.3+
- **Framework:** Express.js 4.18+
- **Database:** MongoDB 6+ with Mongoose ODM
- **Testing:** Jest 29+ with Supertest for HTTP testing
- **Code Quality:** ESLint + Prettier
- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions

### Request Flow

```
Client Request
    ↓
Express Middleware (JSON parser, CORS)
    ↓
Router (Health/API routes)
    ↓
Route Handler
    ↓
Business Logic (Math utilities)
    ↓
Database Query (if needed)
    ↓
Response Formatter
    ↓
Error Handler (catches exceptions)
    ↓
Client Response (JSON)
```

### Project Layout

```
src/
├── config/           # Application configuration
├── middleware/       # Express middleware (error handling)
├── models/          # Mongoose schemas and models
├── routes/          # API route definitions
├── utils/           # Reusable utility functions
├── __tests__/       # Test suites
├── index.ts         # Utility demo/entry point
└── server.ts        # Express server setup

scripts/
└── deploy-heroku.sh # Automated Heroku deployment

.github/workflows/   # GitHub Actions CI/CD pipelines
```

## Code Quality

The project enforces strict TypeScript and code quality standards:

```bash
npm run lint      # ESLint checks
npm run format    # Prettier formatting
npm run build     # TypeScript compilation
```

## License

MIT

## Support

For issues and questions:
1. Check existing [GitHub Issues](https://github.com/Bhino1022/congenial-octo-fortnight/issues)
2. Create a new issue with detailed information
3. Follow the bug report template

## Roadmap

- [x] Core API endpoints (math operations, greeting)
- [x] Health check endpoint
- [x] Express middleware and error handling
- [x] Comprehensive test coverage (23+ tests)
- [x] Docker containerization with health checks
- [x] Docker Compose for local development
- [x] Automated Heroku deployment script
- [x] CI/CD pipeline with GitHub Actions
- [ ] User authentication (JWT)
- [ ] API rate limiting
- [ ] Database migrations
- [ ] Swagger/OpenAPI documentation
- [ ] Advanced caching strategies
- [ ] Monitoring and logging (Winston/Bunyan)
- [ ] GraphQL support
- [ ] WebSocket support
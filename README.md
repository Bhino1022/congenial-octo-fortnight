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

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- math.test.ts
```

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start:prod
```

The compiled JavaScript files will be in the `dist/` directory.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Heroku
- AWS Elastic Beanstalk
- Docker

Quick Heroku deployment:
```bash
heroku login
heroku create your-app-name
heroku config:set DATABASE_URL=your-mongodb-url
git push heroku main
```

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

- [ ] User authentication (JWT)
- [ ] API rate limiting
- [ ] Database migrations
- [ ] Swagger/OpenAPI documentation
- [ ] Docker containerization
- [ ] Advanced caching strategies
- [ ] Monitoring and logging
- [ ] GraphQL support
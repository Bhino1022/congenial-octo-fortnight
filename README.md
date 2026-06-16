# Congenial Octo Fortnight

A well-structured TypeScript Node.js project with modern tooling and best practices.

## Features

- 🦾 **TypeScript** - Strict type checking for safer code
- 🧪 **Jest** - Comprehensive testing framework
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 📦 **npm Scripts** - Build, test, and development commands

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the project in development mode with hot-reloading:

```bash
npm run dev
```

### Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

The compiled output will be in the `dist/` directory.

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Code Quality

Format code with Prettier:

```bash
npm run format
```

Lint code with ESLint:

```bash
npm run lint
```

## Project Structure

```
src/
├── index.ts              # Entry point
├── utils/
│   ├── math.ts          # Math utilities
│   └── format.ts        # Formatting utilities
└── __tests__/
    └── math.test.ts     # Tests
```

## License

MIT
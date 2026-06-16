# Contributing Guide

Thank you for your interest in contributing to Congenial Octo Fortnight! This document provides guidelines and instructions for contributing.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
1. **Title**: Clear, descriptive title
2. **Description**: Detailed explanation of the issue
3. **Steps to Reproduce**: How to recreate the bug
4. **Expected Behavior**: What should happen
5. **Actual Behavior**: What actually happens
6. **Environment**: Node version, OS, etc.

### Suggesting Enhancements

For feature requests, create an issue with:
1. **Clear description** of the feature
2. **Use case** explaining why it's needed
3. **Proposed implementation** (if you have ideas)
4. **Examples** of how it would be used

### Pull Requests

We welcome pull requests! Here's the process:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/congenial-octo-fortnight.git
   cd congenial-octo-fortnight
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, well-documented code
   - Follow the code style guidelines below
   - Add tests for new functionality
   - Update documentation as needed

4. **Run tests and checks**
   ```bash
   npm install
   npm run lint
   npm run format
   npm run build
   npm test
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe your changes in detail
   - Ensure all checks pass

## Code Style Guidelines

### TypeScript

- Use strict typing (no `any`)
- Use interfaces for object shapes
- Export types and interfaces
- Add JSDoc comments for public APIs

```typescript
/**
 * Adds two numbers together
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export const add = (a: number, b: number): number => {
  return a + b;
};
```

### Naming Conventions

- **Files**: Use camelCase for utility files, PascalCase for classes/models
  - `utils/math.ts`
  - `models/User.ts`
  - `middleware/errorHandler.ts`

- **Variables**: Use camelCase
  ```typescript
  const userName = 'John';
  let isValid = true;
  ```

- **Constants**: Use UPPER_SNAKE_CASE
  ```typescript
  const MAX_USERS = 100;
  const API_BASE_URL = 'https://api.example.com';
  ```

- **Functions**: Use camelCase for variables, PascalCase for classes
  ```typescript
  const getUserById = (id: string) => {};
  class UserService {}
  ```

### Code Quality

- Keep functions small and focused
- Use meaningful variable names
- Add comments for complex logic
- Follow DRY (Don't Repeat Yourself) principle
- Use error handling (try-catch, proper status codes)

### Testing

- Write tests for all new features
- Aim for >80% code coverage
- Use descriptive test names
- Follow the arrange-act-assert pattern

```typescript
describe('math utilities', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      // Arrange
      const a = 5;
      const b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(8);
    });
  });
});
```

## Commit Message Guidelines

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without feature/fix
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build, dependencies, etc.

### Examples
```
feat(api): add user authentication endpoint
fix(database): resolve connection timeout issue
docs(readme): update installation instructions
test(utils): add test cases for math utilities
```

## Development Workflow

### Setup Development Environment

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start

# In another terminal, run tests in watch mode
npm run test:watch
```

### Database Development

For local MongoDB:
```bash
# If using Docker
docker run -d -p 27017:27017 --name mongodb mongo

# Update .env
DATABASE_URL=mongodb://localhost:27017/congenial-octo-fortnight
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

## Need Help?

- Check [existing issues](https://github.com/Bhino1022/congenial-octo-fortnight/issues)
- Review [documentation](./README.md)
- Create a discussion for questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉

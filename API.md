# API Documentation

## Overview

This API provides utility functions and demonstrations of a production-ready Express.js server with TypeScript, MongoDB integration, and comprehensive error handling.

**Base URL**: `http://localhost:3000`

## Authentication

Currently, this API does not require authentication. For production use, implement JWT authentication.

## Common Response Format

All responses follow this structure:

### Success Response
```json
{
  "data": {},
  "status": "success",
  "timestamp": "2026-06-16T17:26:25.761Z"
}
```

### Error Response
```json
{
  "error": "Error message",
  "status": "error",
  "code": "ERROR_CODE",
  "timestamp": "2026-06-16T17:26:25.761Z"
}
```

## Endpoints

### 1. Health Check

**Endpoint:** `GET /health`

**Description:** Check if the server is running and healthy

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-06-16T17:26:25.761Z",
  "uptime": 123.45
}
```

**Status Code:** 200 OK

---

### 2. API Information

**Endpoint:** `GET /api`

**Description:** Get information about available API endpoints

**Response:**
```json
{
  "message": "Welcome to the API",
  "endpoints": {
    "math": {
      "add": {
        "method": "POST",
        "path": "/api/math/add",
        "body": {
          "a": "number",
          "b": "number"
        }
      },
      "subtract": {
        "method": "POST",
        "path": "/api/math/subtract",
        "body": {
          "a": "number",
          "b": "number"
        }
      }
    },
    "greeting": {
      "greet": {
        "method": "POST",
        "path": "/api/greet",
        "body": {
          "name": "string"
        }
      }
    }
  }
}
```

**Status Code:** 200 OK

---

### 3. Add Numbers

**Endpoint:** `POST /api/math/add`

**Description:** Add two numbers together

**Request Body:**
```json
{
  "a": 10,
  "b": 5
}
```

**Response (Success):**
```json
{
  "operation": "add",
  "a": 10,
  "b": 5,
  "result": 15
}
```

**Response (Error - Invalid input):**
```json
{
  "error": "Both a and b must be numbers"
}
```

**Status Codes:**
- `200 OK` - Successful addition
- `400 Bad Request` - Invalid input parameters
- `500 Internal Server Error` - Server error

**Example Usage:**
```bash
curl -X POST http://localhost:3000/api/math/add \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 5}'
```

---

### 4. Subtract Numbers

**Endpoint:** `POST /api/math/subtract`

**Description:** Subtract the second number from the first

**Request Body:**
```json
{
  "a": 10,
  "b": 3
}
```

**Response (Success):**
```json
{
  "operation": "subtract",
  "a": 10,
  "b": 3,
  "result": 7
}
```

**Response (Error):**
```json
{
  "error": "Both a and b must be numbers"
}
```

**Status Codes:**
- `200 OK` - Successful subtraction
- `400 Bad Request` - Invalid input
- `500 Internal Server Error` - Server error

**Example Usage:**
```bash
curl -X POST http://localhost:3000/api/math/subtract \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 3}'
```

---

### 5. Greeting

**Endpoint:** `POST /api/greet`

**Description:** Generate a personalized greeting message

**Request Body:**
```json
{
  "name": "John"
}
```

**Request Body (Optional):**
If no name is provided, "World" is used as default.

**Response (Success):**
```json
{
  "message": "Hello, John!"
}
```

**Response (Error - Invalid type):**
```json
{
  "error": "name must be a string"
}
```

**Status Codes:**
- `200 OK` - Successful greeting
- `400 Bad Request` - Invalid input type
- `500 Internal Server Error` - Server error

**Example Usage:**
```bash
curl -X POST http://localhost:3000/api/greet \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice"}'

# With default name
curl -X POST http://localhost:3000/api/greet \
  -H "Content-Type: application/json" \
  -d '{}'
```

---

## Error Handling

### Error Response Format

All errors follow this format:

```json
{
  "error": "Descriptive error message",
  "status": "error"
}
```

### Common Error Codes

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Endpoint doesn't exist |
| 500 | Internal Server Error - Server-side error |

### Validation Rules

- **Number fields**: Must be numeric values
- **String fields**: Must be text values
- **Required fields**: Marked in request body specification

---

## Rate Limiting

Currently, there is no rate limiting implemented. For production, consider implementing:
- IP-based rate limiting
- User-based rate limiting (if authenticated)
- Request throttling

---

## Pagination

Not applicable for current endpoints. For future collection endpoints, pagination will follow:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

---

## Versioning

Current API version: `v1`

Future versions may be accessed via `/api/v2/...`

---

## Best Practices

### Request Headers

Always include:
```
Content-Type: application/json
```

### Response Times

- Expected response time: < 200ms
- Slow queries: > 500ms

### Error Handling

Always handle errors gracefully:
```javascript
try {
  const response = await fetch('/api/math/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: 10, b: 5 })
  });
  
  if (!response.ok) {
    const error = await response.json();
    console.error('Error:', error.error);
  } else {
    const data = await response.json();
    console.log('Result:', data.result);
  }
} catch (error) {
  console.error('Network error:', error);
}
```

---

## Future Enhancements

- [ ] User Management API
- [ ] Task Management API
- [ ] Authentication (JWT)
- [ ] Rate limiting
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Request validation middleware
- [ ] Response caching
- [ ] Request logging

---

## Support

For API issues or questions:
1. Check this documentation
2. Review [README.md](./README.md)
3. Create an [issue on GitHub](https://github.com/Bhino1022/congenial-octo-fortnight/issues)

---

## Changelog

### v1.0.0 (Current)
- Initial API release
- Math utilities endpoints
- Health check endpoint
- Error handling middleware

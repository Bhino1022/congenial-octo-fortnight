import { Router, Request, Response } from 'express';
import { add, subtract, greet } from '../utils/math';

const router = Router();

interface ApiRequest extends Request {
  body: {
    a?: number;
    b?: number;
    name?: string;
  };
}

// GET all endpoints info
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the API',
    endpoints: {
      math: {
        add: { method: 'POST', path: '/api/math/add', body: { a: 'number', b: 'number' } },
        subtract: {
          method: 'POST',
          path: '/api/math/subtract',
          body: { a: 'number', b: 'number' },
        },
      },
      greeting: {
        greet: { method: 'POST', path: '/api/greet', body: { name: 'string' } },
      },
    },
  });
});

// POST add two numbers
router.post('/math/add', (req: ApiRequest, res: Response) => {
  try {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
      res.status(400).json({ error: 'Both a and b must be numbers' });
      return;
    }

    const result = add(a, b);
    res.status(200).json({ operation: 'add', a, b, result });
  } catch (_error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST subtract two numbers
router.post('/math/subtract', (req: ApiRequest, res: Response) => {
  try {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
      res.status(400).json({ error: 'Both a and b must be numbers' });
      return;
    }

    const result = subtract(a, b);
    res.status(200).json({ operation: 'subtract', a, b, result });
  } catch (_error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST greet endpoint
router.post('/greet', (req: ApiRequest, res: Response) => {
  try {
    const { name = 'World' } = req.body;

    if (typeof name !== 'string') {
      res.status(400).json({ error: 'name must be a string' });
      return;
    }

    const greeting = greet(name);
    res.status(200).json({ message: greeting });
  } catch (_error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export { router as apiRouter };

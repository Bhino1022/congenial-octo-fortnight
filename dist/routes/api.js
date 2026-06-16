"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const math_1 = require("../utils/math");
const router = (0, express_1.Router)();
exports.apiRouter = router;
// GET all endpoints info
router.get('/', (_req, res) => {
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
router.post('/math/add', (req, res) => {
    try {
        const { a, b } = req.body;
        if (typeof a !== 'number' || typeof b !== 'number') {
            res.status(400).json({ error: 'Both a and b must be numbers' });
            return;
        }
        const result = (0, math_1.add)(a, b);
        res.status(200).json({ operation: 'add', a, b, result });
    }
    catch (_error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
// POST subtract two numbers
router.post('/math/subtract', (req, res) => {
    try {
        const { a, b } = req.body;
        if (typeof a !== 'number' || typeof b !== 'number') {
            res.status(400).json({ error: 'Both a and b must be numbers' });
            return;
        }
        const result = (0, math_1.subtract)(a, b);
        res.status(200).json({ operation: 'subtract', a, b, result });
    }
    catch (_error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
// POST greet endpoint
router.post('/greet', (req, res) => {
    try {
        const { name = 'World' } = req.body;
        if (typeof name !== 'string') {
            res.status(400).json({ error: 'name must be a string' });
            return;
        }
        const greeting = (0, math_1.greet)(name);
        res.status(200).json({ message: greeting });
    }
    catch (_error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
//# sourceMappingURL=api.js.map
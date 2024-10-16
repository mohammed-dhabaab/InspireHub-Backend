import { body } from 'express-validator';

export const validateUser = [
    body('name').isString().trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isString().trim().notEmpty().withMessage('Password is required'),
    body('role').isString().trim().notEmpty().withMessage('Role is required'),
    body('numberOfIdeas').optional().isString().trim(),
];
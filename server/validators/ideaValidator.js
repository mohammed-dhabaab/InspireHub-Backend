import { body } from 'express-validator';

export const validateIdea = [
    body('name').isString().trim().notEmpty().withMessage('Name is required'),
    body('description').isString().trim().notEmpty().withMessage('Description is required'),
    body('studentId').isString().trim().notEmpty().withMessage('Student ID is required'),
    body('status').isString().trim(),
    body('reason').optional().isString().trim(),
];
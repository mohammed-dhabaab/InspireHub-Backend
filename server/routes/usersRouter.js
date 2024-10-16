import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/usersController.js';
import { validateUser } from '../validators/userValidator.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/',authenticateToken, getAllUsers);
router.get('/:id',authenticateToken, getUserById);
router.post('/',authenticateToken, validateUser, createUser);
router.put('/:id',authenticateToken, validateUser, updateUser);
router.delete('/:id',authenticateToken, deleteUser);

export default router;
import express from 'express';
import { getAllIdeas, getIdeaById, createIdea, updateIdea, deleteIdea } from '../controllers/ideasController.js';
import { validateIdea } from '../validators/ideaValidator.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getAllIdeas);
router.get('/:id',authenticateToken, getIdeaById);
router.post('/',authenticateToken, validateIdea, createIdea);
router.put('/:id',authenticateToken, validateIdea, updateIdea);
router.delete('/:id',authenticateToken, deleteIdea);

export default router;
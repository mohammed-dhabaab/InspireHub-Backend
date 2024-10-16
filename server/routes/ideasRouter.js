import express from 'express';
import { getAllIdeas, getIdeaById, createIdea, updateIdea, deleteIdea } from '../controllers/ideasController.js';
import { validateIdea } from '../validators/ideaValidator.js';

const router = express.Router();

router.get('/', getAllIdeas);
router.get('/:id', getIdeaById);
router.post('/', validateIdea, createIdea);
router.put('/:id', validateIdea, updateIdea);
router.delete('/:id', deleteIdea);

export default router;
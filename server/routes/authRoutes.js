import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route!', user: req.user });
});

export default router;
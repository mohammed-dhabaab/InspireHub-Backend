import jwt from 'jsonwebtoken';
import Users from '../models/usersSchema.js';

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Access forbidden: token is invalid or expired' });
        }
        req.user = await Users.findById(user.id);
        next();
    });
};
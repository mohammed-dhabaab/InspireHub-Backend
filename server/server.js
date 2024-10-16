import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js'
import usersRouter from './routes/usersRouter.js'
import ideasRouter from './routes/ideasRouter.js'

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());


connectDB()

app.use('/api/auth', authRoutes);
app.use("/users", usersRouter)
app.use("/ideas", ideasRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
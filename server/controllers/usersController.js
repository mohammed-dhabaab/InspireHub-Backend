import Users from '../models/usersSchema.js';
import { validationResult } from 'express-validator';

// Get all users  
export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();

        if (!users.length) {
            return res.status(404).json({ message: "Users not found" });
        }
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get user by ID  
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findById(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create a new user  
export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role, numberOfIdeas, ideas } = req.body;

    try {
        const newUser = new Users({ name, email, password, role, numberOfIdeas, ideas });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update user by ID  
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedUser = await Users.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete user by ID  
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await Users.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
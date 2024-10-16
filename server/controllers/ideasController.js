import Ideas from '../models/ideasSchema.js';
import { validationResult } from 'express-validator';

// Get all ideas  
export const getAllIdeas = async (req, res) => {
    try {
        const ideas = await Ideas.find();
        if (!ideas.length) {
            return res.status(404).json({ message: "No ideas found" });
        }
        res.status(200).send(ideas);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get ideas by ID  
export const getIdeaById = async (req, res) => {
    const { id } = req.params;
    try {
        const idea = await Ideas.findById(id);
        if (!idea) {
            return res.status(404).send({ message: "Idea not found" });
        }
        res.status(200).send(idea);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create a new idea  
export const createIdea = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, studentId, status, reason } = req.body;

    try {
        const newIdea = new Ideas({ name, description, studentId, status, reason });
        await newIdea.save();
        res.status(201).send(newIdea);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update idea by ID  
export const updateIdea = async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedIdea = await Ideas.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedIdea) {
            return res.status(404).send({ message: "Idea not found" });
        }
        res.status(200).send(updatedIdea);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete idea by ID  
export const deleteIdea = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedIdea = await Ideas.findByIdAndDelete(id);
        if (!deletedIdea) {
            return res.status(404).send({ message: "Idea not found" });
        }
        res.status(200).send({ message: "Idea deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
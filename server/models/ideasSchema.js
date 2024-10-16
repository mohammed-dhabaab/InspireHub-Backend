import mongoose from "mongoose";

const ideasSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    studentId: { type: String, required: true, trim: true },
    status: { type: String, trim: true },
    reason: { type: String, trim: true }
}, { timestamps: true })

export default mongoose.model('Ideas', ideasSchema)
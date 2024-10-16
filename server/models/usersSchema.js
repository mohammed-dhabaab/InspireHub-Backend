import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    numberOfIdeas: { type: String, trim: true },
    ideas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ideas' }]
}, { timestamps: true })

export default mongoose.model('Users', usersSchema)
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: email,
        require: true,
        unnique: true,
    },
    password: {
        type: String,
        require: true,
    },
    photo: {
        type: String,
    }

}, {timestamps: true});

export const UserModel = mongoose.model("UserModel", UserSchema);
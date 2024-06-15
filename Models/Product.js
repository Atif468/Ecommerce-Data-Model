import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    description: {
        type: String,
        requie: true,
    },
    name: {
        type: String,
        require: true,
        unique: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    stock: {
        type: Number,
        require: true,
        default: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
    }
}, {timestamps: true});

export const ProductModel = mongoose.model('ProductModel', ProductSchema);
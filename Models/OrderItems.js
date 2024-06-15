import mongoose from 'mongoose';

const OrderItemsSchema = new mongoose.Schema({
    productId: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
    },
}, {timestamps: true});

export const OrderItemsModel = mongoose.model('OrderItemsModel', OrderItemsSchema);
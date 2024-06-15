import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
    },
    quantity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: OrderItems,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        emun: ["pending", "cancelled", "delivered"],
        default: "pending",
    }

}, {timestamps: true});

export const OrderModel = mongoose.model('OrderModel', OrderSchema);
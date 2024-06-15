import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: string,
        require:true,
    }
},{timestamps: true});

export const CategoryModel = mongoose.model('CategoryModel', CategorySchema);
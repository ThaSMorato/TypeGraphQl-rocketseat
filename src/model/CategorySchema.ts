import mongoose from "mongoose";

const schema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model("Categories",schema);
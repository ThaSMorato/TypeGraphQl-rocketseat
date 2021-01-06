import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Conzy:1096356@cluster0.omc61.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
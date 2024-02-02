import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, //will not work without username
        unique: true, //will not allow different users to have the same username
    },
    email: {
        type: String, 
        required: true, //will not work without email
        unique: true, //will not allow different users to have the same username
    },
    password: {
        type: String, 
        required: true, //will not work without password
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User; //use the model anywhere else in the application-can change to users as its a default!!
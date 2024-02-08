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
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
}, 
{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User; //use the model anywhere else in the application-can change to users as its a default!!
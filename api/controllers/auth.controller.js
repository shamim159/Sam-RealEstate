import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); 
    const newUser = new User({ username, email, password: hashedPassword });  
    try {
        await newUser.save()  //await used and async added as it can take very long to load and may crash if not used-executes after it loads+ error catcher so it is displayed to the user rather than the console
    res.status(201).json("User created successfully");

    } catch (error) {
      next(error);
    }
};


////this doc is for user interface res.status(500).json(error.message);
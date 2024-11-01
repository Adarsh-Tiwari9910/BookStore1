import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        } else {
            // Hash the password
            const hashPassword = await bcryptjs.hash(password, 10);
            const created = new User({
                name,
                email,
                password: hashPassword // Store the hashed password
            });

            await created.save(); // Await the save operation
            res.status(201).json({ 
                message: "Signup Successfully", 
                user: {
                    _id: created._id, // Use created user ID
                    name: created.name,
                    email: created.email
                } 
            });
        }
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Check if the password matches
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        } else {
            res.status(200).json({ 
                message: "Login Successfully", 
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                } 
            });
        }
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

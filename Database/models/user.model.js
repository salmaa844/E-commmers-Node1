
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: Object
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    address: {
        type: String
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"]
    },
    code: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    })
export const UserSchema = mongoose.model("User", userSchema);
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        select: false
    }

}, {
    timestamps: true
});

//password encrypted before the password save in database
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

//check the password is correct or not before login 
userSchema.methods.isPasswordCorrect = async (password) => {
    return await bcrypt.compare(password, this.password)
}

//generate access token 
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        fullName: this.fullName,
        email: this.email,
        password: this.password
    },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }

    )
}

//generate refresh token 
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        }
    )
}




export const User = mongoose.model("User", userSchema);



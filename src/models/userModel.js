import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    firstName:{
        type: String,
        required: [true, "Please enter your first name"],
        trim: true,
        min: 3,
        max: 20
    },
    lastName:{
        type: String,
        required: [false, "Please enter your last name"],
        trim: true,
        min: 3,
        max: 20
    },
    mobile:{
        type: String,
        required: [true, "Please enter your mobile number (10 digits)"],
        trim: true,
        min: 10,
        max: 10
    },
    email:{
        type: String,
        required: [true, "An account with this email already exists"],
        unique: true,
        trim: true,
        lowercase: true
    },

    password:{
        type: String,
        required: [true, "Please enter your password"],
        min: 8,
        max: 20
    },
    isVerified:{ 
        type: Boolean,
        default: false
    },
    isAdmin:{ /*Manages the Clinics in an area */
        type: Boolean,
        default: false
    },
    isSuperAdmin:{ /*manages the admins */
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    VerifiedToken: String,
    VerifiedTokenExpiry: Date,
}
)
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
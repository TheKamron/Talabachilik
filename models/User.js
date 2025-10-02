import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstName: {type: String},
    surName: {type: String},
    email: {type: String, default: null},
    username: {type: String, required: true, unique: true},
    phoneNumber: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: "user.png"},
    university: {type: String, default: null}
}, {timestamps: true})

const User = model('User', UserSchema)

export default User;
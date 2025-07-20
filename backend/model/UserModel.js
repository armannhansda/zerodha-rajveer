const {model} = require("mongoose");

const UserSchema = {
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }  
}

module.exports = {UserModel: model("user", UserSchema)} ;   
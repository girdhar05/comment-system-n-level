import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String
    }
});

export default users = mongoose.model('user', userSchema); 
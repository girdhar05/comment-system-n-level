import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    message: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    reply: [self]
})

export default comments = mongoose.model('comment', commentSchema);


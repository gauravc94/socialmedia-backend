import mongoose from "mongoose"

const commentData = mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        }
    }
)

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: [commentData]
    },
    { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)

export default Post
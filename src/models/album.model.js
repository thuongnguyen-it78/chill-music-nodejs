const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        songIdList: {
            type: Array,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        artistList: {
            type: Array,
            required: true
        },
        isActive: {
            type: Number,
            default: 0
        },
        isDelete: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('album', albumSchema, 'albums')

const { Schema } = require('mongoose')


const taskSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        name: {type: String},
        description: {type: String},
        time: {type: Date}
    },
    {timestamps: true,}
)

module.exports = taskSchema
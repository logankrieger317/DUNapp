const { Schema } = require('mongoose')


const timeSchema = new Schema(
    {
        timestamp: { type: Date },
        task: { type: Schema.Types.ObjectId, ref: 'Task' },
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {timestamps: true,}
)

module.exports = timeSchema
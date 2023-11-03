const { Schema } = require('mongoose')


const taskListSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        task: { type: Schema.Types.ObjectId, ref: 'Task' }
    },
    {timestamps: true,}
)

module.exports = taskListSchema
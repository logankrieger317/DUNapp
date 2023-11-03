const { Schema } = require('mongoose')


const taskSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        name: {type: String},
        description: {type: String},
        taskList: { type: Schema.Types.ObjectId, ref: 'TaskList' },
        time: { type: Schema.Types.ObjectId, ref: 'Time' }
    },
    {timestamps: true,}
)

module.exports = taskSchema
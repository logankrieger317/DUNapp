const { Schema } = require('mongoose')


const userSchema = new Schema(
    {
        name: {type: String},
        email: {type: String},
        phone: {type: Number},
        task: { type: Schema.Types.ObjectId, ref: 'Task' },
        
    },
    {timestamps: true,}
)

module.exports = userSchema
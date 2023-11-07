const { Schema } = require('mongoose')


const userSchema = new Schema(
    {
        name: {type: String},
        email: {type: String},
        phone: {type: Number},
        password:{type: String},
        task: [{ type: Schema.Types.ObjectId, ref: 'User' }]
        
        
    },
    {timestamps: true,}
)

module.exports = userSchema
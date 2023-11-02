const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ssmaddux:PasswordPassword@cluster0.uwcqaz2.mongodb.net/DUNDB?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db
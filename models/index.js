const mongoose = require('mongoose')
const userSchema = require('./user')
const taskListSchema = require('./taskList')
const taskSchema = require('./task')

const User = mongoose.model('user', userSchema)
const TaskList = mongoose.model('taskList', taskListSchema)
const Task = mongoose.model('task', taskSchema)

module.exports = {
    User,
    TaskList,
    Task
}
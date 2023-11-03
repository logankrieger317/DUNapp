const mongoose = require('mongoose')
const userSchema = require('./user')
const timeSchema = require('./time')
const taskListSchema = require('./taskList')
const taskSchema = require('./task')

const User = mongoose.model('user', userSchema)
const Time = mongoose.model('time', timeSchema)
const TaskList = mongoose.model('taskList', taskListSchema)
const Task = mongoose.model('task', taskSchema)

module.exports = {
    User,
    Time,
    TaskList,
    Task
}
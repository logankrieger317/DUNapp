const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

const taskListController = require('./controllers/taskList')
const tasksController = require('./controllers/tasks')
const timeController = require('./controllers/time')
const usersController = require('./controllers/users')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/taskList', taskListController.getAllTaskLists)
app.get('/tasks', tasksController.getAllTasks)
app.get('/time', timeController.getAllTimes)
app.get('/users', usersController.getAllUsers)

app.get('/taskList/:id', taskListController.getOneTaskList)
app.get('/tasks/:id', tasksController.getOneTask)
app.get('/time/:id', timeController.getOneTime)
app.get('/users/:id', usersController.getOneUser)

app.post('/taskList', taskListController.createTaskList)
app.post('/tasks', tasksController.createTask)
app.post('/time', timeController.createTime)
app.post('/users', usersController.createUser)

app.put('/taskList/:id', taskListController.updateTaskList)
app.put('/tasks/:id', tasksController.updateTask)
app.put('/time/:id', timeController.updateTime)
app.put('/users/:id', usersController.updateUser)

app.delete('/taskList/:id', taskListController.deleteTaskList)
app.delete('/tasks/:id', tasksController.deleteTask)
app.delete('/time/:id', timeController.deleteTime)
app.delete('/users/:id', usersController.deleteUser)






app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  
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

app.get('/taskList', taskListController.getAllTaskList)
app.get('/tasks', tasksController.getAllTasks)
app.get('/time', timeController.getAllTimes)
app.get('/users', usersController.getAllUsers)

app.get('/taskList/:id', taskListController.getOneTaskList)
app.get('/tasks/:id', tasksController.getOneTasks)
app.get('/time/:id', timeController.getOneTimes)
app.get('/users/:id', usersController.getOneUsers)

app.post('/taskList', taskListController.createOneTaskList)
app.post('/tasks', tasksController.createOneTasks)
app.post('/time', timeController.createOneTimes)
app.post('/users', usersController.createOneUsers)

app.put('/taskList/:id', taskListController.updateTaskList)
app.put('/tasks/:id', tasksController.updateTasks)
app.put('/time/:id', timeController.updateTimes)
app.put('/users/:id', usersController.updateUsers)

app.delete('/taskList/:id', taskListController.deleteTaskList)
app.delete('/tasks/:id', tasksController.deleteTasks)
app.delete('/time/:id', timeController.deleteTimes)
app.delete('/users/:id', usersController.deleteUsers)






app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  
const { TaskList }  = require('../models');

const getAllTaskLists = async (req, res) => {
    try {
        const taskLists = await TaskList.find()
        res.json(taskLists)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneTaskList(req, res) {
    try {
        const id = req.params.id
        const taskList = await TaskList.findById(id)
        if (taskList) {
            return res.json(taskList)
        }
        return res.status(404).send('TaskList with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTaskList(req,res) {
    try {
        const taskList = await new TaskList (req.body)
        await taskList.save()
        return res.status(201).json({
            taskList
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateTaskList(req,res) {
    try {
        const id = req.params.id
        const taskList = await TaskList.findByIdAndUpdate(id, req.body, {new: true})
        if (taskList) {
            return res.status(200).json(taskList)
        }
        throw new Error('TaskList not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTaskList(req,res) {
    try {
        const id = req.params.id
        const taskList =  await TaskList.findByIdAndDelete(id)
        if (taskList) {
            return res.status(200).json(taskList)
        }
        throw new Error('TaskList not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}




module.exports = {
    getAllTaskLists,
    getOneTaskList,
    createTaskList,
    updateTaskList,
    deleteTaskList
}
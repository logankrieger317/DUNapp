const { Time }  = require('../models');

const getAllTimes = async (req, res) => {
    try {
        const times = await Time.find()
        res.json(times)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneTime(req, res) {
    try {
        const id = req.params.id
        const time = await Time.findById(id)
        if (time) {
            return res.json(time)
        }
        return res.status(404).send('Time with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTime(req,res) {
    try {
        const time = await new Time (req.body)
        await time.save()
        return res.status(201).json({
            time
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateTime(req,res) {
    try {
        const id = req.params.id
        const time = await Time.findByIdAndUpdate(id, req.body, {new: true})
        if (time) {
            return res.status(200).json(time)
        }
        throw new Error('Time not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTime(req,res) {
    try {
        const id = req.params.id
        const time =  await Time.findByIdAndDelete(id)
        if (time) {
            return res.status(200).json(time)
        }
        throw new Error('Time not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}




module.exports = {
    getAllTimes,
    getOneTime,
    createTime,
    updateTime,
    deleteTime,
}
const { User }  = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneUser(req, res) {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createUser(req,res) {
    try {
        const user = await new User (req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateUser(req,res) {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteUser(req,res) {
    try {
        const id = req.params.id
        const user =  await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(User)
        }
        throw new Error('User not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function validateUserSignin(req, res) {
    const { email, password } = req.body;

    try {
        const User = await User.findOne({ email });

        if (!User) {
            return res.json({ authenticated: false, message: 'User not found' });
        }

        if (User.password === password) {
            return res.json({ authenticated: true, message: 'User authenticated' });
        } else {
            return res.json({ authenticated: false, message: 'Incorrect password' });
        }
    } catch (error) {
        return res.status(500).json({ authenticated: false, message: 'Server error' });
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    validateUserSignin
}
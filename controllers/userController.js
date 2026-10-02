const User = require('../models/userModel');

// Sabhi users fetch karna
const getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Naya user create karna
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = await User.createUser(name, email);

        res.status(201).json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// User update karna
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedUser = await User.updateUser(id, name, email);

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// User delete karna
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.deleteUser(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            message: 'User deleted successfully',
            user: deletedUser
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
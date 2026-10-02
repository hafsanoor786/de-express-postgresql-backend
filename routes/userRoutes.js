const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// GET request - Sabhi users dekhne ke liye
router.get('/users', getUsers);

// POST request - Naya user add karne ke liye
router.post('/users', createUser);

module.exports = router;
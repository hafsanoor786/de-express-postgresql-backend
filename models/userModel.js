const pool = require('../db');

const User = {
    // Sabhi users get karna
    getAllUsers: async () => {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    },

    // Naya user create karna
    createUser: async (name, email) => {
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        return result.rows[0];
    },

    // User update karna
    updateUser: async (id, name, email) => {
        const result = await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        return result.rows[0];
    },

    // User delete karna
    deleteUser: async (id) => {
        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [id]
        );
        return result.rows[0];
    }
};

module.exports = User;
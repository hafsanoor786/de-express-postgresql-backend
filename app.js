const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware taake hum JSON data samajh sakein
app.use(express.json());

// Routes use karein
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
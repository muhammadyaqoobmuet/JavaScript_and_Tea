const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Proxy endpoint
app.post('/image/generation', async (req, res) => {
    try {
        const response = await axios.post('https://api.limewire.com/image/generation', req.body, {
            headers: {
                Authorization: req.headers.authorization, // Forward authorization header
                'X-Api-Version': req.headers['x-api-version'], // Forward X-Api-Version header
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(error.response.status || 500).json(error.response.data);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Health check endpoint
app.get('/status', (req, res) => {
    res.json({ status: 'Server is running' });
});

// message API 
app.get('/api/message', (req, res) => {
    res.json({ message: 'Fetched from server API' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
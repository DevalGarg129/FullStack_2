const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        // Return a mock JWT
        res.json({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token.signature_123" });
    } else {
        res.status(400).json({ error: "Username and password required" });
    }
});

app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token.signature_123") {
            return res.json({ message: "Successfully accessed protected data!", user: "admin", timestamp: new Date().toISOString() });
        }
    }
    return res.status(401).json({ error: "Unauthorized access. Invalid or missing token." });
});

app.listen(5000, () => {
    console.log("Mock backend running on port 5000");
});

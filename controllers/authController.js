const jwt = require('jsonwebtoken');

const users = [];

exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).json({ message: 'Congratulations! You have registered successfully!' });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Please enter correct username and password' });
    }
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: `Welcome ${username}!, Have a great day ahead!`, token });
};


exports.protectedRoute = (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.json({ message: 'This is a protected route' });
    });
};

exports.signoutUser = (req, res) => {
    res.json({ message: 'The user has been successfully signed out.' });
};
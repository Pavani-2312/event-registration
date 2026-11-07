const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.post('/register', (req, res) => {
    res.json({
        message: 'Registration Successful',
        registration: req.body
    });
});
app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
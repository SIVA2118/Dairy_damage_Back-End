const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    return res.json({ message: 'Login successful' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;

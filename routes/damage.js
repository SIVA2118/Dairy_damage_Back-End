const express = require('express');
const router = express.Router();
const Damage = require('../models/Damage'); // Make sure this is correctly pointing to your model

// Create new damage record
router.post('/', async (req, res) => {
  try {
    const damage = new Damage(req.body);
    await damage.save();
    res.status(201).json({ message: 'Damage record saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all damage records
router.get('/', async (req, res) => {
  try {
    const damages = await Damage.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(damages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update damage record
router.put('/:id', async (req, res) => {
  try {
    const updated = await Damage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(updated);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: 'Failed to update' });
  }
});

module.exports = router;

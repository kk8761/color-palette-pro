const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let palettes = [
  { id: '1', name: 'Primary Colors', colors: ['#FF5733', '#33FF57', '#3357FF'], description: 'Basic primary colors' },
  { id: '2', name: 'Secondary Colors', colors: ['#FFFF00', '#00FFFF', '#FF00FF'], description: 'Basic secondary colors' }
];

app.get('/api/palettes', (req, res) => {
  try {
    res.status(200).json({ success: true, data: palettes });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/api/palettes', (req, res) => {
  try {
    const { name, colors, description } = req.body;
    if (!name || !colors || !description) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    const newPalette = { id: Date.now().toString(), name, colors, description };
    palettes.push(newPalette);
    res.status(201).json({ success: true, data: newPalette });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.put('/api/palettes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, colors, description } = req.body;
    if (!name || !colors || !description) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    const paletteIndex = palettes.findIndex(palette => palette.id === id);
    if (paletteIndex === -1) {
      return res.status(404).json({ success: false, error: 'Palette not found' });
    }
    palettes[paletteIndex] = { id, name, colors, description };
    res.status(200).json({ success: true, data: palettes[paletteIndex] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.delete('/api/palettes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const paletteIndex = palettes.findIndex(palette => palette.id === id);
    if (paletteIndex === -1) {
      return res.status(404).json({ success: false, error: 'Palette not found' });
    }
    palettes.splice(paletteIndex, 1);
    res.status(200).json({ success: true, data: { message: 'Palette deleted successfully' } });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
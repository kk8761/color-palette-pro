<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Palette Pro</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0d1117;
      --bg-secondary: #161b22;
      --bg-card: #1c2128;
      --accent-color: #58a6ff;
      --font-family: 'Inter', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: var(--font-family);
      background-color: var(--bg-primary);
      color: white;
      box-sizing: border-box;
    }

    header {
      background-color: var(--bg-secondary);
      padding: 1rem 2rem;
      text-align: center;
    }

    main {
      padding: 2rem;
    }

    section {
      margin-bottom: 2rem;
    }

    footer {
      background-color: var(--bg-secondary);
      text-align: center;
      padding: 1rem 2rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    .palette-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .palette-card:hover {
      transform: scale(1.05);
      transition: all 0.3s ease;
    }

    .palette-name {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    .palette-colors {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }

    .palette-color {
      width: 30px;
      height: 30px;
      border-radius: 4px;
    }

    .add-palette-btn {
      background-color: var(--accent-color);
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .add-palette-btn:hover {
      background-color: rgba(96, 166, 255, 0.8);
      transition: all 0.3s ease;
    }
  </style>
</head>
<body>
  <header>
    <h1>Color Palette Pro</h1>
  </header>
  <main>
    <section id="palette-list">
      <!-- Palette cards will be dynamically added here -->
    </section>
    <button class="add-palette-btn" id="add-palette">Add Palette</button>
  </main>
  <footer>
    <p>&copy; 2023 Color Palette Pro. All rights reserved.</p>
  </footer>

  <script>
    const paletteList = document.getElementById('palette-list');
    const addPaletteBtn = document.getElementById('add-palette');

    async function fetchPalettes() {
      try {
        const response = await fetch('/api/palettes');
        if (!response.ok) {
          throw new Error('Failed to fetch palettes');
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(error);
        displayError('Failed to load palettes');
      }
    }

    function displayPalettes(palettes) {
      paletteList.innerHTML = '';
      if (palettes.length === 0) {
        paletteList.innerHTML = '<p>No palettes found.</p>';
      } else {
        palettes.forEach(palette => {
          const card = document.createElement('div');
          card.className = 'palette-card';

          const nameElement = document.createElement('h2');
          nameElement.className = 'palette-name';
          nameElement.textContent = palette.name;

          const colorsContainer = document.createElement('div');
          colorsContainer.className = 'palette-colors';
          palette.colors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'palette-color';
            colorDiv.style.backgroundColor = color;
            colorsContainer.appendChild(colorDiv);
          });

          card.appendChild(nameElement);
          card.appendChild(colorsContainer);

          paletteList.appendChild(card);
        });
      }
    }

    function displayError(message) {
      paletteList.innerHTML = `<p style="color: red;">${message}</p>`;
    }

    async function addPalette() {
      const name = prompt('Enter palette name:');
      if (!name) return;

      try {
        const response = await fetch('/api/palettes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            colors: ['#FF5733', '#33FF57', '#3357FF'], // Default colors
            description: ''
          })
        });
        if (!response.ok) {
          throw new Error('Failed to create palette');
        }
        const data = await response.json();
        displayPalettes([data.data, ...palettes]);
      } catch (error) {
        console.error(error);
        displayError('Failed to create palette');
      }
    }

    addPaletteBtn.addEventListener('click', addPalette);

    fetchPalettes().then(palettes => {
      displayPalettes(palettes);
    });
  </script>
</body>
</html>
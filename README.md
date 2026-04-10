# Color Palette Pro 🎨

[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-blue.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-^4.17.1-brightgreen.svg)](https://expressjs.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

## Screenshot Alt Text

A screenshot of the Color Palette Pro application.

## Features

- Create custom color palettes
- Share and save palettes
- Advanced filtering and sorting options
- Dark theme with glassmorphism
- Smooth transitions and hover effects
- Responsive design for mobile devices
- Loading states and empty states styled

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/color-palette-pro.git
   cd color-palette-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Docs

### Method: GET  
**Endpoint:** `/api/palettes`  
**Purpose:** Retrieve all palettes  
**Response:** Array of palette objects

### Method: POST  
**Endpoint:** `/api/palettes`  
**Purpose:** Create a new palette  
**Response:** Created palette object

### Method: PUT  
**Endpoint:** `/api/palettes/:id`  
**Purpose:** Update an existing palette  
**Response:** Updated palette object

### Method: DELETE  
**Endpoint:** `/api/palettes/:id`  
**Purpose:** Delete a palette  
**Response:** Success message

## Tech Stack

- Node.js
- Express
- MongoDB (for persistence)
- HTML/CSS/JavaScript
- Bootstrap for styling

## MIT License

Copyright © 2023 Your Name. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
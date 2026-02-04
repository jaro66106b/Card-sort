# Card Sort

A minimal Kanban-style card app with lanes and drag-and-drop.

## Features

- Add, rename, and delete lanes
- Add, edit, and delete cards
- Drag cards between lanes and reorder within a lane
- Local persistence via localStorage

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the URL printed by Vite (usually http://localhost:5173)

## Notes

- This is a front-end only demo, no backend required.
- State is saved in your browser under the key `card-sort-board-v1`.

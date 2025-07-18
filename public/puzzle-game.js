(function () {
  if (window.__PUZZLE_GAME_LOADED__) return;
  window.__PUZZLE_GAME_LOADED__ = true;

  function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);
    setTimeout(() => waitForElement(selector, callback), 50);
  }

  waitForElement('#puzzle-pieces', (puzzle_pieces) => {
    const dropzone = document.querySelector('#dropzone');
    if (!dropzone) return;

    function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    }

    function dropOver(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(data);
      if (draggedElement) event.target.appendChild(draggedElement);
    }

    function reset_puzzle() {
      const parent = puzzle_pieces;
      const shuffled = document.createDocumentFragment();

      while (parent.children.length) {
        const randomIndex = Math.floor(Math.random() * parent.children.length);
        shuffled.appendChild(parent.children[randomIndex]);
      }

      parent.appendChild(shuffled);
    }

    // Generate puzzle pieces
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3) + 1;
      const column = (i % 3) + 1;

      const cell = document.createElement('div');
      cell.className = 'bg-white/40 min-h-[100px] aspect-square';

      const puzzleImage = document.createElement('div');
      puzzleImage.className = 'h-full w-full bg-center bg-no-repeat bg-cover';
      puzzleImage.setAttribute('draggable', 'true');
      puzzleImage.id = `piece-${row}-${column}`;
      puzzleImage.style.backgroundImage = `url('/images/puzzle-image-split/row-${row}-column-${column}.jpg')`;

      puzzleImage.addEventListener('dragstart', drag);

      cell.appendChild(puzzleImage);
      puzzle_pieces.appendChild(cell);
    }

    // Shuffle puzzle after rendering
    reset_puzzle();

    // Generate drop zones
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'bg-white/40 min-h-[100px]';
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', dropOver);
      dropzone.appendChild(cell);
    }
  });
})();
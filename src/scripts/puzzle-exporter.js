export function initPuzzleGame() {
  const puzzlePiecesContainer = document.querySelector('#puzzle-pieces');
  const dropzone = document.querySelector('#dropzone');
  if (!puzzlePiecesContainer || !dropzone) return;

  // Track original piece positions
  const originalPieces = new Map();

  // Drag and drop handlers
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add('opacity-50', 'scale-90');
    
    // Store original parent if not already stored
    const pieceId = event.target.id;
    if (!originalPieces.has(pieceId)) {
      originalPieces.set(pieceId, event.target.parentElement);
    }
  };

  const handleDragEnd = (event) => {
    event.target.classList.remove('opacity-50', 'scale-90');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('bg-white/60');
  };

  const handleDragLeave = (event) => {
    event.currentTarget.classList.remove('bg-white/60');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-white/60');
    
    const pieceId = event.dataTransfer.getData("text/plain");
    const draggedPiece = document.getElementById(pieceId);
    
    if (!draggedPiece) return;
    
    // Clear the drop zone if it already has a piece
    if (event.currentTarget.firstChild) {
      const existingPiece = event.currentTarget.firstChild;
      const originalParent = originalPieces.get(existingPiece.id);
      if (originalParent) {
        originalParent.appendChild(existingPiece);
      }
    }
    
    // Move the dragged piece to the drop zone
    event.currentTarget.innerHTML = '';
    const pieceContainer = document.createElement('div');
    pieceContainer.className = 'w-full h-full flex items-center justify-center overflow-hidden p-1';
    
    // Reset any transforms and set proper sizing
    draggedPiece.className = 'max-w-full max-h-full object-contain';
    draggedPiece.style.transform = '';
    
    pieceContainer.appendChild(draggedPiece);
    event.currentTarget.appendChild(pieceContainer);
    
    // Remove opacity and scale effects
    draggedPiece.classList.remove('opacity-50', 'scale-90');
  };

  // Create puzzle pieces (using img tags)
  const createPuzzlePiece = (row, col) => {
    const cell = document.createElement('div');
    cell.className = 'relative aspect-square overflow-hidden rounded-lg shadow-md bg-white/40';
    
    const piece = document.createElement('img');
    piece.className = 'w-full h-full object-contain cursor-grab active:cursor-grabbing';
    piece.src = `/images/puzzle-image-split/row-${row}-column-${col}.jpg`;
    piece.draggable = true;
    piece.id = `piece-${row}-${col}`;
    
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragend', handleDragEnd);
    
    cell.appendChild(piece);
    return cell;
  };

  // Create drop zones
  const createDropZone = () => {
    const zone = document.createElement('div');
    zone.className = 'aspect-square bg-white/30 border-2 border-dashed border-white/50 rounded-lg transition-colors duration-200';
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('drop', handleDrop);
    return zone;
  };

  // Initialize game
  const initializeGame = () => {
    puzzlePiecesContainer.innerHTML = '';
    dropzone.innerHTML = '';
    
    // Create puzzle pieces
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3) + 1;
      const col = (i % 3) + 1;
      puzzlePiecesContainer.appendChild(createPuzzlePiece(row, col));
    }
    
    // Create drop zones
    for (let i = 0; i < 9; i++) {
      dropzone.appendChild(createDropZone());
    }
    
    // Shuffle pieces
    const pieces = Array.from(puzzlePiecesContainer.children);
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => puzzlePiecesContainer.appendChild(piece));
  };

  initializeGame();
}
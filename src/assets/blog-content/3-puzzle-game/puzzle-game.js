onload = function reset_puzzle () {
    let parent = this.document.querySelector('#puzzle-pieces')
    let shuffledPieces = this.document.createDocumentFragment()

    while (parent.children.length) {
        shuffledPieces.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)])
    }

    parent.appendChild(shuffledPieces)
}

function drag (event) {
    event.dataTransfer.setData("text", event.target.id)
}

function dropOver(event) {
    event.preventDefault()
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  event.target.appendChild(draggedElement)
}


const puzzle_pieces = document.querySelector('#puzzle-pieces')

const dropzone = document.querySelector('#dropzone')


for (let i=0; i<9; i++) {
    const row = Math.floor(i / 3) + 1;
    const column = (i % 3) + 1;
    console.log(row, column)
    const cell = document.createElement('div')
    cell.classList = 'bg-white/40 min-h-[100px] aspect-square'

    const puzzleImage = document.createElement('div')
    puzzleImage.classList = 'h-full w-full bg-center bg-no-repeat bg-cover'
    puzzleImage.setAttribute('draggable', 'true')
    puzzleImage.setAttribute('ondragstart', 'drag(event)')
    puzzleImage.id = `piece-${row}-${column}`
    puzzleImage.style.backgroundImage = `url('/images/puzzle-image-split/row-${row}-column-${column}.jpg')`
    cell.appendChild(puzzleImage)
    puzzle_pieces.appendChild(cell)
}

for (i=0; i<9; i++) {
    const cell = document.createElement('div')
    cell.classList = 'bg-white/40 min-h-[100px]'
    cell.setAttribute('ondrop', 'drop(event)')
    cell.setAttribute('ondragover', 'dropOver(event)')
    dropzone.appendChild(cell)
}
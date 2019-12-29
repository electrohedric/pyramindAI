let pieces;
let board;

function preload() {
    pieces = loadJSON("pieces.json");
    board = new Board("grid.txt", "grid_textures.json");
}

function setup() {
    createCanvas(1000, 900);
}

function draw() {
    board.draw(0, 0, 75);
}
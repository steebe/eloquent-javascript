main();

function main() {
  let rowLengthInput = 20;
  console.log('Behold, The Board: \n\n');
  console.log(createChessBoard(rowLengthInput));
}

function createChessBoard(rowLength) {
  let board = '';
  let symbol = ' ';
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j <= rowLength + 1; j++) {
      board += symbol;
      symbol = switchSymbol(symbol);
    }
    board += '\n';
    symbol = switchSymbol(symbol);
  }
  return board;
}

function switchSymbol(currentSymbol) {
  if (currentSymbol === ' ') {
    return '#';
  } else {
    return ' ';
  }
}

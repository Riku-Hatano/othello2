const newBoard = (col: number, row: number, board: any) => {
  //石を置けるかどうかの判定
  let changeCell: any[] = [];
  let forChangeCell: any[] = [];

  let diagonalCounter = 0;
  let stringed: string;
  if (board.isWhiteTurn) {
    //下がひっくり返るか
    for (let i = col; i < 8; i++) {
      forChangeCell.push(board.board[i][row]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col + i + " " + row);
      }
    }
    forChangeCell = [];
    //右がひっくり返るか
    for (let i = row; i < 8; i++) {
      forChangeCell.push(board.board[col][i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col + " " + (row + i));
      }
    }
    forChangeCell = [];
    //上がひっくり返るか
    for (let i = col; i > -1; i--) {
      forChangeCell.push(board.board[i][row]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col - i + " " + row);
      }
    }
    forChangeCell = [];
    //左がひっくり返るか
    for (let i = row; i > -1; i--) {
      forChangeCell.push(board.board[col][i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col + " " + (row - i));
      }
    }
    forChangeCell = [];
    //右下がひっくり返るか
    if (7 - col < 7 - row) {
      diagonalCounter = 7 - col + 1;
    } else if (7 - col > 7 - row) {
      diagonalCounter = 7 - row + 1;
    } else {
      diagonalCounter = 7 - row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col + i][row + i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col + i + " " + (row + i));
      }
    }
    forChangeCell = [];
    //左下がひっくり返るか
    if (7 - col < row) {
      diagonalCounter = 7 - col + 1;
    } else if (7 - col > row) {
      diagonalCounter = row + 1;
    } else {
      diagonalCounter = row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col + i][row - i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col + i + " " + (row - i));
      }
    }
    forChangeCell = [];
    //左上がひっくり返るか
    if (col < row) {
      diagonalCounter = col + 1;
    } else if (row > col) {
      diagonalCounter = row + 1;
    } else {
      diagonalCounter = row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col - i][row - i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col - i + " " + (row - i));
      }
    }
    forChangeCell = [];
    //右上がひっくり返るか
    if (col < 7 - row) {
      diagonalCounter = col + 1;
    } else if (col > 7 - row) {
      diagonalCounter = 7 - row + 1;
    } else {
      diagonalCounter = 7 - row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col - i][row + i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("BW") !== -1 &&
        stringed.indexOf("B") === 1 &&
        stringed.indexOf("B ") === -1) ||
      stringed.indexOf("B ") > stringed.indexOf("W")
    ) {
      for (let i = 1; i < stringed.indexOf("BW") + 1; i++) {
        changeCell.push(col - i + " " + (row + i));
      }
    }
    forChangeCell = [];
  } else {
    //下がひっくり返るか
    for (let i = col; i < 8; i++) {
      forChangeCell.push(board.board[i][row]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col + i + " " + row);
      }
    }
    forChangeCell = [];
    //右がひっくり返るか
    for (let i = row; i < 8; i++) {
      forChangeCell.push(board.board[col][i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col + " " + (row + i));
      }
    }
    forChangeCell = [];
    //上がひっくり返るか
    for (let i = row; i > -1; i--) {
      forChangeCell.push(board.board[i][row]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col - i + " " + row);
      }
    }
    forChangeCell = [];
    //左がひっくり返るか
    for (let i = row; i > -1; i--) {
      forChangeCell.push(board.board[col][i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col + " " + (row - i));
      }
    }
    forChangeCell = [];
    //右下がひっくり返るか
    if (7 - col < 7 - row) {
      diagonalCounter = 7 - col + 1;
    } else if (7 - col > 7 - row) {
      diagonalCounter = 7 - row + 1;
    } else {
      diagonalCounter = 7 - row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col + i][row + i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col + i + " " + (row + i));
      }
    }
    forChangeCell = [];
    //左下がひっくり返るか
    if (7 - col < row) {
      diagonalCounter = 7 - col + 1;
    } else if (7 - col > row) {
      diagonalCounter = row + 1;
    } else {
      diagonalCounter = row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col + i][row - i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col + i + " " + (row - i));
      }
    }
    forChangeCell = [];
    //左上がひっくり返るか
    if (col < row) {
      diagonalCounter = col + 1;
    } else if (row > col) {
      diagonalCounter = row + 1;
    } else {
      diagonalCounter = row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col - i][row - i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col - i + " " + (row - i));
      }
    }
    forChangeCell = [];
    //右上がひっくり返るか
    if (col < 7 - row) {
      diagonalCounter = col + 1;
    } else if (col > 7 - row) {
      diagonalCounter = 7 - row + 1;
    } else {
      diagonalCounter = 7 - row + 1;
    }
    for (let i = 0; i < diagonalCounter; i++) {
      forChangeCell.push(board.board[col - i][row + i]);
    }
    stringed = forChangeCell.join("");
    if (
      (stringed.indexOf("WB") !== -1 &&
        stringed.indexOf("W") === 1 &&
        stringed.indexOf("W ") === -1) ||
      stringed.indexOf("W ") > stringed.indexOf("B")
    ) {
      for (let i = 1; i < stringed.indexOf("WB") + 1; i++) {
        changeCell.push(col - i + " " + (row + i));
      }
    }
    forChangeCell = [];
  }

  //実際にマスを反転させる処理。changeCellに反転させるマスの番地が入っている。
  if (changeCell.length === 0) {
    console.log("nothing chenged");
    return board.board;
  }
  const newSquares = JSON.parse(JSON.stringify(board.board));
  if (board.isWhiteTurn) {
    console.log("done");
    for (let i = 0; i < changeCell.length; i++) {
      newSquares[changeCell[i][0]][changeCell[i][2]] = "W";
    }
    newSquares[col][row] = "W";
  } else {
    for (let i = 0; i < changeCell.length; i++) {
      newSquares[changeCell[i][0]][changeCell[i][2]] = "B";
    }
    newSquares[col][row] = "B";
  }
  const history = board.boardHistory.slice();
  history.push(newSquares);

  changeCell = [];
  return newSquares;
};

export default newBoard;

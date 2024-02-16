"use client";

const EditBoard = (col: number, row: number, board: any) => {
  if (board.mode === "EDIT_WHITE") {
    const newBoard = JSON.parse(JSON.stringify(board.board));
    newBoard[col][row] = "W";
    return newBoard;
  } else {
    console.log("done");
    const newBoard = JSON.parse(JSON.stringify(board.board));
    newBoard[col][row] = "B";
    return newBoard;
  }
};

export default EditBoard;

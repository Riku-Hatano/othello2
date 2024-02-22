import newBoard from "./newBoard";
import EditBoard from "./editBoard";

const HandleChange = (col: number, row: number, board: any): any => {
  switch (board.mode) {
    case "PLAY":
      if (board.board[col][row] !== " ") {
        return {
          changeTurnFlag: false,
          board: board.board,
        };
      }
      const newVal = newBoard(col, row, board);
      return {
        changeTurnFlag: newVal.flag,
        board: newVal.board,
      };
    case "EDIT_WHITE":
      return {
        changeTurnFlag: false,
        board: EditBoard(col, row, board),
      };
    case "EDIT_BLACK":
      return {
        changeTurnFlag: false,
        board: EditBoard(col, row, board),
      };
    default:
      console.log("illegal mode");
  }
};
export default HandleChange;

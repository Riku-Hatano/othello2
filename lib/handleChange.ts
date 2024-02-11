// import { putBlack, putWhite } from "./EditBoard";
import newBoard from "./newBoard";
import EditBoard from "./editBoard";
// import { useDispatch } from "react-redux";

const HandleChange = (col: number, row: number, board: any): any => {
  switch (board.mode) {
    case "PLAY":
      if (board.board[col][row] !== " ") {
        //すでにコマが置いてある場所をクリックした場合
        return;
      }
      return newBoard(col, row, board);
    case "EDIT_WHITE":
      return EditBoard(col, row, board);
    case "EDIT_BLACK":
      return EditBoard(col, row, board);
    default:
      console.log("illegal mode");
  }
};
export default HandleChange;

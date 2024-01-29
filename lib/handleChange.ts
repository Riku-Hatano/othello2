// import { putBlack, putWhite } from "./EditBoard";
import newBoard from "./newBoard";
// import { useDispatch } from "react-redux";

const HandleChange = (col: number, row: number, board: any): any => {
  //   const dispatch = useDispatch();
  if (board.board[col][row] !== " ") {
    //すでにコマが置いてある場所をクリックした場合
    return;
  }
  return newBoard(col, row, board);
};
export default HandleChange;

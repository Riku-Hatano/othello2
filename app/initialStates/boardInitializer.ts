import { Cell } from "./entireState";

const boardInitializer = (isClear = false): any[][] => {
  // const boardInitializer = (isClear = false): Cell[][] => {
  // const rowSize = 8;
  // const colSize = 8;
  // const returnArr: Cell[][] = [];
  // for (let i = 0; i < colSize; i++) {
  //   const tmpRowArr: Cell[] = [];
  //   for (let j = 0; j < rowSize; j++) {
  //     tmpRowArr.push(" ");
  //   }
  //   returnArr.push(tmpRowArr);
  // }
  // if (!isClear) {
  //   returnArr[3][3] = "W";
  //   returnArr[4][4] = "W";
  //   returnArr[3][4] = "B";
  //   returnArr[4][3] = "B";
  // }
  const returnArr = [
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "W", "B", " ", " ", " "],
    [" ", " ", " ", "B", "W", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
  ];
  return returnArr;
};

export default boardInitializer;

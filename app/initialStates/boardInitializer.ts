import { Cell } from "./entireState";

const boardInitializer = (isClear = false): Cell[][] => {
  const rowSize = 8;
  const colSize = 8;
  const returnArr: Cell[][] = [];
  for (let i = 0; i < colSize; i++) {
    const tmpRowArr: Cell[] = [];
    for (let j = 0; j < rowSize; j++) {
      tmpRowArr.push(null);
    }
    returnArr.push(tmpRowArr);
  }
  if (!isClear) {
    returnArr[3][3] = "white";
    returnArr[4][4] = "white";
    returnArr[3][4] = "black";
    returnArr[4][3] = "black";
  }
  return returnArr;
};

export default boardInitializer;

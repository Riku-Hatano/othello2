import boardInitializer from "./boardInitializer";
import EntireState from "./entireState";

const initialBoard = boardInitializer();
const initialState: EntireState = {
  game: {
    board: initialBoard,
    boardHistory: [initialBoard],
    turn: null,
  },
  mode: "PLAY",
  setES: () => {},
};

export default initialState;

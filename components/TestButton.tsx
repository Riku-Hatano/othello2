import axios from "axios";
import { store } from "@/redux/store";

const testConnect = async () => {
  const score = store.getState().board.scores;
  const data = axios.create().post("http://localhost:3030", score);
  const result = await data;
  console.log(result);
};
const TestButton = () => {
  return <button onClick={testConnect}>test connect</button>;
};

export default TestButton;

import axios from "axios";

const testConnect = async () => {
  const data = axios.create().get("http://localhost:3030");
  const result = await data;
  console.log(result);
};
const TestButton = () => {
  return <button onClick={testConnect}>test connect</button>;
};

export default TestButton;

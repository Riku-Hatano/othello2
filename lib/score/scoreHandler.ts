"use client";
import axios from "axios";
import { store } from "@/redux/store";

const scoreHandler = async () => {
  const score = JSON.stringify(store.getState().board.scores);
  const data = await axios.create().post("http://localhost:3030", score);
  console.log(data.data);
};

export default scoreHandler;

"use client";

import initialState from "./initialStates/initialState";
import { useContext, createContext, useState } from "react";
import TestButton from "@/components/testbutton";
export const EntireStateContext = createContext(initialState);

export default function Home() {
  const [es, setEs] = useState(initialState);
  es.setES = setEs;
  return (
    <EntireStateContext.Provider value={es}>
      <div>home</div>
      <TestButton></TestButton>
    </EntireStateContext.Provider>
  );
}

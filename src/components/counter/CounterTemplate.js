import React from "react";
import { CounterArea } from "./counterStyles";

const CounterTemplate = ({ state, increment, decrement }) => {
  return (
    <CounterArea>
      {state.value}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </CounterArea>
  );
};

export default CounterTemplate;

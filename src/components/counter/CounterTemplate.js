import React, { useEffect } from "react";
import { CounterArea } from "./counterStyles";

const CounterTemplate = ({ value, increment, startComponent }) => {

  useEffect(() =>{
    //startComponent();
  });

  return (
    <CounterArea>
      { value}
      <button type="button" onClick={()=> increment(value+1)}>
        +
      </button>
      <button type="button">
        -
      </button>
    </CounterArea>
  );
};

export default CounterTemplate;

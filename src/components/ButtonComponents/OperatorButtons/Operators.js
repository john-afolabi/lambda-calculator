import React, { useState } from "react";
import { operators } from "../../../data";
import { OperatorButton } from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opState, setOpState] = useState(operators);
  return (
    <div className="operators">
      {
         opState.map((operator, index) => {
          return <OperatorButton key={index} operator={operator.value} />
         })
      }
    </div>
  );
};

export default Operators;
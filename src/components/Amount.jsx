import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, increByAmt } from "../actions";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchApi,
} from "../Slices/amountSlices";
const Amount = () => {
  const amount = useSelector((state) => state.ajay.amount);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container-items">
        <div className="flex">
          <h1>Amount:</h1>
          <h1>{amount}</h1>
        </div>
        <button className="btn" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <button
          className="btn"
          onClick={() => dispatch(incrementByAmount(value))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Amount;

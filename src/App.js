import React, { useState } from "react";
import "./app.css";
import Amount from "./components/Amount";
import Bouns from "./components/Bouns";

import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "./Slices/amountSlices";


const App = () => {
  const [value, setValue] = useState();
  const amount = useSelector((state) => state.ajay.amount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="flex">
          <h4>Total Amount:</h4>
          <h4>{amount}</h4>
        </div>
        <div className="flex">
          <h1>Total Points:</h1>
          <h1>0</h1>
        </div>
      </div>
      <Amount />
      <Bouns />
      <div className="container">
        <input
          value={value}
          placeholder="enter id to get person name"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" onClick={() => dispatch(fetchApi(value))}>
          Get Data
        </button>
      </div>
    </>
  );
};

export default App;

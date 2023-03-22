import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Slices/bounsSlice";
const Bouns = () => {
  const points = useSelector((state) => state.sunny.points);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container-items">
        <div className="flex">
          <h1>Points:</h1>
          <h1>{points}</h1>
        </div>
        <button className="btn" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Bouns;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 mb-4 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
      >
        Decrement
      </button>

      <div className="text-4xl font-semibold mb-4">{count}</div>

      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

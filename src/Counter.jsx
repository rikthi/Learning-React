import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    /* setCount(count + 1);
    setCount(count + 1); */ /*this code is supposed to increase the count
                              by 2 but it doesn't because react dom bundles
                              the setCount calls to improve efficiency. Thus,
                              it increments the same old value 2 times and then
                              updates. */
    // Solution:
    setCount((c) => c + 1); // the arrow funciton inside sets the argument for the setCount function
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Events added: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;

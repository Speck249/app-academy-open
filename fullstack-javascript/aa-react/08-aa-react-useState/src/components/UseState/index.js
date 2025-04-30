import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={theme}>
      <div className="state">
        <h1>UseState Component</h1>
        <button
          onClick={() =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
          }
        >
          Change Theme
        </button>
        <h2>Count is {count}</h2>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={(count) => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseState;

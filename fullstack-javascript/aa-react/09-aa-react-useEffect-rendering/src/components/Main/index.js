import { useEffect, useState } from "react";

const Main = () => {
  const [ToggleOne, setToggleOne] = useState(false);
  const [ToggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect1 Ran");
  }, []);

  useEffect(() => {
    console.log("useEffect2 Ran");
    if (ToggleTwo === true)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [ToggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!ToggleOne)}>Toggle One</button>
      <button onClick={() => setToggleTwo(!ToggleTwo)}>Toggle Two</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </>
  );
};
export default Main;

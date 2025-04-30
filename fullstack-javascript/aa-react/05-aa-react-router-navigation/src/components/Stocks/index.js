import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  const history = useHistory();

  const loggedIn = true;
  if (loggedIn === false) return <Redirect to="/not-logged-in" />;

  const handleClick = () => {
    window.alert("Sending information to the DB.");
    history.push("/");
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>SEND</button>
      {console.log(history)}
    </div>
  );
}

export default Stocks;

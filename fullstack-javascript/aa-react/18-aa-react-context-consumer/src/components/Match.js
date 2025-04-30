import { useState, useEffect, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const { sign } = useContext(HoroscopeContext);

  useEffect(() => {}, [sign.match]);

  return (
    <>
      <h4 className="matchReveal">{`Match: ${sign.match}`}</h4>
    </>
  );
};
export default Match;

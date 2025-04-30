import { createContext, useState } from "react";
import horoscopeObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Libra");
  const sign = horoscopeObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
export default HoroscopeProvider;

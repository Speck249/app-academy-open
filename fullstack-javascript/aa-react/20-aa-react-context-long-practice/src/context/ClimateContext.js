import { useState, createContext, useContext } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);

    return (
      <ClimateContext.Provider value={{ temperature, setTemperature, humidity, setHumidity }}>
       {children}
      </ClimateContext.Provider>
    )
}

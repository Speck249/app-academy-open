import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import './Greenhouse.css';

function Greenhouse() {
  const [ backgroundImage, setBackgroundImage ] = useState(dayImage)
  const { themeName } = useTheme();

  useEffect(() => {
    if (themeName === "day") setBackgroundImage(dayImage);
    if (themeName === "night") setBackgroundImage(nightImage); 
  }, [themeName]);

  return (
    <section>
      <img className='greenhouse-img'
        src={backgroundImage}
        alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
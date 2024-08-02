import React, { useState, useEffect } from 'react';
import morning from '../../src/morning.png'
import noon from '../../src/noon.png'
import evening from '../../src/evening.png'
import morningicon from '../../src/dawn.png'
import eveningicon from '../../src/cloudy-night.png'
import noonicon from '../../src/sunset.png'

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Good Morning");
  const [greetingBg, setgreetingBg] = useState(null);
  const [greetingIcon, setGreetingIcon] = useState(null)
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now);

      const hour = now.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
        setgreetingBg(morning);
        setGreetingIcon(morningicon)
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
        setgreetingBg(noon);
        setGreetingIcon(noonicon)
      } 
      else {
        setGreeting("Good Evening");
        setgreetingBg(evening);
        setGreetingIcon(eveningicon)
      }
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=' flex justify-center lg:flex items-center lg:px-6 rounded-md bg-transparent ' >
      <div>
        <img src={greetingIcon} className='mr-6 w-14 h-14' alt="" />
      </div>
      <div>
      <h1 className='  font-bold text-white p-1'>{greeting}</h1>
      <p className='text-white p-1 font-semibold '>{currentDateTime.toLocaleString()}</p>
      </div>
      
    </div>
  );
};

export default DateTimeDisplay;

import React, { useState, useEffect } from 'react';
import morning from '../../src/morning.png'
import noon from '../../src/noon.png'
import evening from '../../src/evening.png'
const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Good Morning");
  const [greetingBg, setgreetingBg] = useState(null);
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now);

      const hour = now.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
        setgreetingBg(morning);
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
        setgreetingBg(noon);
      } 
      else {
        setGreeting("Good Evening");
        setgreetingBg(evening);
      }
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='my-2 flex justify-center lg:flex lg:flex-col p-4 lg:py-1 lg:px-11 rounded-md bg-black' style={{backgroundImage: `url(${greetingBg})`, backgroundSize: 'cover'}}>
      <h1 className='mr-24 lg:mr-0 font-bold text-white p-1'>{greeting}</h1>
      <p className='text-white p-1 font-semibold mr-2 lg:mr-0'>{currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default DateTimeDisplay;

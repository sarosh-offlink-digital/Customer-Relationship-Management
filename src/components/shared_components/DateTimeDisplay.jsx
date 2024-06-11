import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now);

      const hour = now.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='my-2 p-2 border-blue-800 rounded-md'>
      <h1 className='text-lg font-bold text-blue-800'>{greeting}</h1>
      <p className='text-blue-800'>{currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default DateTimeDisplay;

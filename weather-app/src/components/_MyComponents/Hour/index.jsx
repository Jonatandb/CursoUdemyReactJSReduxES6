import React, { useState, useEffect } from 'react';

const Hour = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, [hour]);

  return <div>{hour}</div>;
};

export default Hour;

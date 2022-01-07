import { useState, useEffect } from 'react';

export const ListenScrollEvent = () => {
  const [isEvent, setIsEvent] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 250) {
      setIsEvent(true);
    } else {
      setIsEvent(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return { isEvent };
};

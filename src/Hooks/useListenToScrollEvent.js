import { useState, useEffect } from 'react';

export const useListenToScrollEvent = () => {
  const [isEventScroll, setIsEventScroll] = useState(false);

  const listenScrollEvent = () => {
    setIsEventScroll(window.scrollY > 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return { isEventScroll };
};

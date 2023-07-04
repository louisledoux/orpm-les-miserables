import { useEffect, useState } from 'react';

function useScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolling(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolling };
}

export default useScroll;

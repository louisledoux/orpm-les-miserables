'use client';

import { useEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(0);
  const breakpoint = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobileScreen = width <= breakpoint;
  const isDesktopScreen = width > breakpoint;

  // Return the width, so we can use it in our components
  return {
    width, breakpoint, isMobileScreen, isDesktopScreen,
  };
}

export default useViewport;

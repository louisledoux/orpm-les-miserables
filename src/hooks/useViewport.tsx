'use client';

import { useEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return the width, so we can use it in our components
  return { width };
}

export default useViewport;

import { useState, useEffect } from 'react';

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width: width, height: height };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowSizeChange() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return { windowSize, isScreen2XL: windowSize.width < 1536, isMobile: windowSize.width < 1024 };
};

export default useWindowSize;

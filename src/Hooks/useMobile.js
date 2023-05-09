import { useState, useEffect } from "react";

export default function useMobile(){
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return(isMobile);
}
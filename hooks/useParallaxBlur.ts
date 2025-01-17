import { useState, useEffect } from 'react';

export function useParallaxBlur(colors: string[]) {
  const [scrollY, setScrollY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Calculate blur based on scroll position
      const maxBlur = 20; // max blur in pixels
      const blurFactor = Math.min(newScrollY / 1000, 1);
      setBlur(blurFactor * maxBlur);

      // Calculate background color based on scroll position
      const colorIndex = Math.floor(blurFactor * colors.length);
      setBackgroundColor(colors[colorIndex] || colors[colors.length - 1]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colors]);

  return { scrollY, blur, backgroundColor };
}


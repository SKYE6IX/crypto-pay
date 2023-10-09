'use client';
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const isSSR = typeof window === 'undefined';
  const [isDarkMode, setIsDarkmode] = useState(
    (!isSSR && JSON.parse(window.localStorage.getItem('dark-mode')!)) || false
  );
  useEffect(() => {
    window.localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkMode);
    window.localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  };
  return { isDarkMode, toggleDarkMode };
};

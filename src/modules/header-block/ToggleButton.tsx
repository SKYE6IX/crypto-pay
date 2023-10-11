'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import DarkModeIcon from './assests/dark-mode-icon.svg';
import LightModeIcon from './assests/light-mode-icon.svg';
import './styles/header.scss';

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const isDark = theme === 'dark';
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="header__theme-button"></button>;
  }
  return (
    <button className="header__theme-button" onClick={toggleTheme}>
      <Image src={isDark ? LightModeIcon : DarkModeIcon} alt="dark-mode-btn" />
    </button>
  );
};

export default ToggleButton;

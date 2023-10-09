'use client';
import Image from 'next/image';
import cryptoLogo from './assests/crypto-pay-logo.jpeg';
import DarkModeIcon from './assests/dark-mode-icon.svg';
import { useTheme } from '@/hook/useTheme';
import './styles/header.scss';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="header">
      <div className="header__inner-container">
        <div className="header__logo-wrapper">
          <Image src={cryptoLogo} alt="crypto-logo" />
        </div>
        <div className="header__nav-menu-wrapper">
          <ul className="header__nav-menu_list">
            <li>Use cases</li>
            <li>Features</li>
            <li>How to start</li>
          </ul>
        </div>
        <div className="header__button-wrapper">
          <button className="header__theme-button" onClick={toggleDarkMode}>
            <Image src={DarkModeIcon} alt="dark-mode-btn" />
          </button>
          <button className="header__button">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

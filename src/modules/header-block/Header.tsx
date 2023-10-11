import Image from 'next/image';
import cryptoLogo from './assests/crypto-pay-logo.jpeg';
import ToggleButton from './ToggleButton';
import './styles/header.scss';

const Header = () => {
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
          <ToggleButton />
          <button className="header__button">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

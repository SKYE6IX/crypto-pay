import Image from 'next/image';
import { Link } from 'react-scroll';
import cryptoLogo from './assests/crypto-pay-logo.jpeg';
import ToggleButton from './ToggleButton';
import './styles/header.scss';

const Header = () => {
  const navList = [
    { name: 'Use cases', key: 'use_cases' },
    { name: 'Features', key: 'features' },
    { name: 'How to start', key: 'how_to_start' },
  ];
  return (
    <header className="header">
      <div className="header__inner-container">
        <div className="header__logo-wrapper">
          <Image src={cryptoLogo} alt="crypto-logo" />
        </div>
        <div className="header__nav-menu-wrapper">
          <ul className="header__nav-menu_list">
            {navList.map((list) => (
              <li key={list.key}>
                <Link to={list.key}>{list.name}</Link>
              </li>
            ))}
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

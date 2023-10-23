import Image from 'next/image';
import { Link } from 'react-scroll';
import cryptoLogo from './crypto-pay-logo.jpeg';
import './syles/footer.scss';
const Footer = () => {
  const navList = [
    { name: 'Use cases', key: 'use_cases' },
    { name: 'Features', key: 'features' },
    { name: 'How to start', key: 'how_to_start' },
  ];
  return (
    <footer className="footer">
      <div className="footer__inner-container">
        <div className="footer__headers">
          <div className="footer__logo-wrapper">
            <Image src={cryptoLogo} alt="crypto-logo" />
          </div>
          <div className="footer__nav-menu-wrapper">
            <ul className="footer__nav-menu_list">
              {navList.map((list) => (
                <li key={list.key}>
                  <Link to={list.key}>{list.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__button-wrapper">
            <button>Get started</button>
          </div>
        </div>
        <div className="footer__copyright">
          <span>©2023 Crypto Bot</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

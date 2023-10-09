import Image from 'next/image';
import JsIcon from './assets/javascript-logo.svg';
import NetIcon from './assets/net-logo.svg';
import PhpIcon from './assets/php-logo.svg';
import PythonIcon from './assets/python-logo.svg';
import GoIcon from './assets/go-logo.svg';
import './styles/community-block.scss';

const CommunityBlock = () => {
  return (
    <section className="community-block">
      <div className="community-block__inner-container">
        <div className="community-block__header-text">
          <h2>Join dev community</h2>
          <p>
            Connect with bot developers and explore the possibilities <br />
            our crypto payments service unlocks.
          </p>
        </div>
        <div className="community-block__icons">
          <div className="community-block__icons-wrapper">
            <Image src={JsIcon} alt="js-icon" />
            <span>crypto-pay-api</span>
          </div>
          <div className="community-block__icons-wrapper">
            <Image src={NetIcon} alt="net-icon" />
            <span>CryptoPay</span>
          </div>
          <div className="community-block__icons-wrapper">
            <Image src={PhpIcon} alt="php-icon" />
            <span>crypto-pay-api</span>
          </div>
          <div className="community-block__icons-wrapper">
            <Image src={PythonIcon} alt="pyhton-icon" />
            <span>aiocrypto pay</span>
          </div>
          <div className="community-block__icons-wrapper">
            <Image src={GoIcon} alt="go-icon" />
            <span>cryptobot-sdk-golang</span>
          </div>
        </div>
        <div className="community-block__button">
          <button>Open Devs chat</button>
        </div>
      </div>
    </section>
  );
};

export default CommunityBlock;

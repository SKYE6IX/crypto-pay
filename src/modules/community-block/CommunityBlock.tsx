import JavaScriptIcon from './icons/JavaScriptIcon';
import NetIcon from './icons/NetIcon';
import PhpIcon from './icons/PhpIcon';
import PythonIcon from './icons/PythonIcon';
import GoIcon from './icons/GoIcon';
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
            <JavaScriptIcon />
            <span>crypto-pay-api</span>
          </div>
          <div className="community-block__icons-wrapper">
            <NetIcon />
            <span>CryptoPay</span>
          </div>
          <div className="community-block__icons-wrapper">
            <PhpIcon />
            <span>crypto-pay-api</span>
          </div>
          <div className="community-block__icons-wrapper">
            <PythonIcon />
            <span>aiocrypto pay</span>
          </div>
          <div className="community-block__icons-wrapper">
            <GoIcon />
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

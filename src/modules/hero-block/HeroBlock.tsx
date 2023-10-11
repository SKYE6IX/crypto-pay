import Image from 'next/image';
import BotOne from './assets/bot-1.jpeg';
import BotTwo from './assets/bot-2.jpeg';
import BotThree from './assets/bot-3.jpeg';
import BotFour from './assets/bot-4.jpeg';
import BotFive from './assets/bot-5.jpeg';
import IphoneFrame from './assets/iphone-frame.png';
import IphoneScreen from './assets/iphone-screen.jpeg';
import IphoneScreenDark from './assets/iphone-screen-dark.jpeg';
import './styles/hero-block.scss';

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <div className="hero-block__inner-container">
        <div className="hero-block__description">
          <div className="hero-block__title">
            <div className="hero-block__head-one">
              <h1>
                Crypto payments for <span>telegram bots</span>
              </h1>
            </div>
            <div className="hero-block__head-two">
              <h2>
                Seamlessly accept crypto payments
                <br /> in your Telegram bots and services.
              </h2>
            </div>
            <div className="hero-block__button">
              <button>Get started</button>
            </div>
          </div>

          <div className="hero-block__bots">
            <div className="hero-block__bots-logos">
              <div className="bots-logo-wrapper">
                <Image src={BotOne} alt="bot-logo" />
              </div>
              <div className="bots-logo-wrapper">
                <Image src={BotTwo} alt="bot-logo" />
              </div>
              <div className="bots-logo-wrapper">
                <Image src={BotThree} alt="bot-logo" />
              </div>
              <div className="bots-logo-wrapper">
                <Image src={BotFour} alt="bot-logo" />
              </div>
              <div className="bots-logo-wrapper">
                <Image src={BotFive} alt="bot-logo" />
              </div>
            </div>
            <div className="hero-block__bots-text">
              <p>Popular bots use Crypto Pay</p>
            </div>
          </div>
        </div>

        <div className="hero-block__image">
          <div className="iphone-frame">
            <Image src={IphoneFrame} alt="iphone-frame" />
            <div className="iphone-screen" data-hide-on-theme="dark">
              <Image src={IphoneScreen} alt="iphone-screen" />
            </div>
            <div className="iphone-screen" data-hide-on-theme="light">
              <Image src={IphoneScreenDark} alt="iphone-screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBlock;

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UsdtIcon from '../../assests/usdt-icon.png';
import BtcIcon from '../../assests/btc-icon.png';
import TonIcon from '../../assests/ton-icon.png';
import RightArrowIcon from '../../assests/right-arrow-icon.svg';
import LeftArrowIcon from '../../assests/left-arrow-icon.svg';
import RightArrowIconDark from '../../assests/right-arrow-icon-dark.svg';
import LeftArrowIconDark from '../../assests/left-arrow-icon-dark.svg';
import { animateFunction } from '../../helper';
import { useMediaQuery } from '@/hook/useMediaQuery';
import './styles/exchange.scss';

interface CurrenciesListType {
  src: any;
  name: string;
}
const currenciesList: CurrenciesListType[] = [
  {
    src: UsdtIcon,
    name: 'usdt',
  },
  {
    src: BtcIcon,
    name: 'btc',
  },
  {
    src: TonIcon,
    name: 'ton',
  },
];
const Exchange = () => {
  const { map, size } = animateFunction(currenciesList);
  const isSmall = useMediaQuery('(max-width:768px)');

  return (
    <div className="exchange">
      <div className="exchange__image">
        <div className="exchange__currencies">
          {currenciesList.map((currency, index) => {
            const factor = size - 1 - map.get(index)!;

            return (
              <motion.div
                key={index}
                className="currency-wrapper"
                animate={{
                  left: isSmall ? 0 - 0.7 * factor * 42 : 0 - 0.7 * factor * 62,
                  zIndex: map.get(index),
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <Image src={currency.src} alt={currency.name} />
              </motion.div>
            );
          })}
        </div>
        <div className="exchange__dollar-sign">
          <span>$</span>
        </div>
        <div className="exchange__icon-wrapper" data-hide-on-theme="dark">
          <Image src={RightArrowIcon} alt="right-arrow-icon" />
          <Image src={LeftArrowIcon} alt="left-arrow-icon" />
        </div>
        <div className="exchange__icon-wrapper" data-hide-on-theme="light">
          <Image src={RightArrowIconDark} alt="right-arrow-icon" />
          <Image src={LeftArrowIconDark} alt="left-arrow-icon" />
        </div>
      </div>

      <div className="exchange__header-text">
        <h3>
          Real-time <br />
          exchange rates
        </h3>
        <p>
          Request up to date currency rate with <br />
          the <span>getExchangeRates</span> API method
        </p>
      </div>
    </div>
  );
};

export default Exchange;

'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import EthIcon from '../../assests/eth-icon.png';
import UsdtIcon from '../../assests/usdt-icon.png';
import TonIcon from '../../assests/ton-icon.png';
import BtcIcon from '../../assests/btc-icon.png';
import TrxIcon from '../../assests/trx-icon.png';
import LtcIcon from '../../assests/ltc-icon.png';
import UsdcIcon from '../../assests/usdc-icon.png';
import BnbIcon from '../../assests/bnb-icon.png';
import './styles/currencies.scss';

interface CurrencyListType {
  icon: any;
  name: string;
}
const currenciesList: CurrencyListType[] = [
  {
    icon: EthIcon,
    name: 'eth',
  },
  {
    icon: UsdtIcon,
    name: 'usdt',
  },
  {
    icon: TonIcon,
    name: 'ton',
  },
  {
    icon: BtcIcon,
    name: 'btc',
  },
  {
    icon: TrxIcon,
    name: 'trx',
  },
  {
    icon: LtcIcon,
    name: 'ltc',
  },
  {
    icon: UsdcIcon,
    name: 'usdc',
  },
  {
    icon: BnbIcon,
    name: 'bnb',
  },
];

const Currencies = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  return (
    <div className="currencies" ref={ref}>
      <div className="currencies__header-texts">
        <h3>Accept a wide range of cryptocurrencies</h3>
        <p>
          Bill any supported cryptocurrencies with asset parameter in
          <span> GetInvoice </span>
          method
        </p>
      </div>
      <div className="currencies__icons-wrapper" ref={ref}>
        {currenciesList.map((currency, index) => (
          <motion.div
            key={index}
            className="currencies__icon-item"
            animate={{
              scale: isInView ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.5,
              ease: 'easeInOut',
            }}
          >
            <Image src={currency.icon} alt={currency.name} />
            <span>{currency.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Currencies;

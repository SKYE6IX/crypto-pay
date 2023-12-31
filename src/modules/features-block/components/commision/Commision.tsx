'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import TreeIcon from '../../assests/tree-icon.svg';
import CursorIcon from '../../assests/cursor-icon.svg';
import { useMediaQuery } from '@/hook/useMediaQuery';
import './styles/commision.scss';

const Commission = () => {
  const isSmall = useMediaQuery('(max-width:567px)');
  const isMedium = useMediaQuery('(max-width:1024px)');
  const { resolvedTheme } = useTheme();
  const getBackground = () => {
    const isDark = resolvedTheme === 'dark';
    const lightBg =
      'linear-gradient(240deg, rgba(41, 126, 226, 0.18) 3.57%, rgba(24, 97, 182, 0.18) 86.24%)';
    const darkBg = 'linear-gradient(233deg, #9FCCFA -20.48%, #0974F1 97.38%)';
    if (isDark) {
      return darkBg;
    }
    return lightBg;
  };
  return (
    <div className="commission">
      <div className="commission__image">
        <motion.div
          className="animate-button"
          animate={{
            scale: [1, 1.1, 1],
            background: [
              'linear-gradient(240deg,rgba(41, 126, 226, 0.12) 3.57%,rgba(24, 97, 182, 0.12) 86.24%)',
              getBackground(),
              'linear-gradient(240deg,rgba(41, 126, 226, 0.12) 3.57%,rgba(24, 97, 182, 0.12) 86.24%)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
        >
          <Image src={TreeIcon} alt="tree-icon" />
          <span>Create App</span>
        </motion.div>

        <motion.div
          className="animate-cursor"
          animate={{
            right: isSmall
              ? ['-10px', '5.51px', '-10px']
              : isMedium
              ? ['-15px', '5.51px', '-15px']
              : ['37.02px', '58.51px', '37.02px'],
            bottom: isSmall
              ? ['-20px', '0.79px', '-20px']
              : isMedium
              ? ['-25px', '0.79px', '-25px']
              : ['5.59px', '22.79px', '5.59px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Image src={CursorIcon} alt="cursor-icon" />
        </motion.div>
      </div>
      <div className="commission__header-texts">
        <h3>One click to start</h3>
        <p>
          Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> <br />
          and tap Create App to get API Token
        </p>
      </div>
    </div>
  );
};

export default Commission;

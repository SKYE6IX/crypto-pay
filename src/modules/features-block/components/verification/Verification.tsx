'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IphoneFrame from '../../assests/iphone-frame.png';
import IphoneScreen from '../../assests/iphone-screen.png';
import IphoneScreenDark from '../../assests/iphone-screen-dark.png';
import VerificationImageOne from '../../assests/verification-image-one.png';
import VerificationImageTwo from '../../assests/verification-image-two.png';
import VerificationImageThree from '../../assests/verification-image-three.png';
import VerificationImageFour from '../../assests/verification-image-four.png';
import { GetCurrentIndex } from '../../helper';
import { useMediaQuery } from '@/hook/useMediaQuery';
import './style/verification.scss';

interface VerificationListType {
  src: any;
}

const verificationMsgList: VerificationListType[] = [
  {
    src: VerificationImageOne,
  },
  {
    src: VerificationImageTwo,
  },
  {
    src: VerificationImageThree,
  },
  {
    src: VerificationImageFour,
  },
];

const Verification = () => {
  const isSmall = useMediaQuery('(max-width:567px)');
  const isMedium = useMediaQuery('(max-width:1024px)');
  const { currentIndex } = GetCurrentIndex(verificationMsgList);
  return (
    <div className="verification">
      <div className="verification__images">
        <div className="verification__iphone-frame">
          <Image src={IphoneFrame} alt="iphone-frame" />
          <div
            className="verification__iphone-screen"
            data-hide-on-theme="dark"
          >
            <Image src={IphoneScreen} alt="iphone-screen" />
          </div>
          <div
            className="verification__iphone-screen"
            data-hide-on-theme="light"
          >
            <Image src={IphoneScreenDark} alt="iphone-screen" />
          </div>
        </div>
        {verificationMsgList.map((msg, index) => {
          return (
            <motion.div
              key={index}
              className="verification__image-messages"
              animate={{
                width: isSmall
                  ? currentIndex === index
                    ? ''
                    : '195px'
                  : isMedium
                  ? currentIndex === index
                    ? ''
                    : '233px'
                  : currentIndex === index
                  ? ''
                  : '380px',
                translateY:
                  isSmall || isMedium
                    ? currentIndex === index
                      ? ['-1px', '7px']
                      : '-1px'
                    : currentIndex === index
                    ? ['-1px', '10px']
                    : '-1px',
                zIndex: currentIndex === index ? 2 : 1,
                opacity: currentIndex === index ? [0.5, 1] : 0.5,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image src={msg.src} alt="verification-image" />
            </motion.div>
          );
        })}
      </div>
      <div className="verification__header-texts">
        <h3>Send coins to users</h3>
        <p>
          Automate payouts to users with <span>transfer</span> API method
        </p>
      </div>
    </div>
  );
};

export default Verification;

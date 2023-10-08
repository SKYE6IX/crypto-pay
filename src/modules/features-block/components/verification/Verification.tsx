'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IphoneFrame from '../../assests/iphone-frame.png';
import IphoneScreen from '../../assests/iphone-screen.png';
import VerificationImageOne from '../../assests/verification-image-one.png';
import VerificationImageTwo from '../../assests/verification-image-two.png';
import VerificationImageThree from '../../assests/verification-image-three.png';
import VerificationImageFour from '../../assests/verification-image-four.png';
import { getCurrentIndex, animateFunction } from '../../helper';
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
  const isSmall = useMediaQuery('(max-width:768px)');
  const { currentIndex } = getCurrentIndex(verificationMsgList);
  // const { map, size, activeIndex } = animateFunction(verificationMsgList);
  return (
    <div className="verification">
      <div className="verification__images">
        <div className="verification__iphone-frame">
          <Image src={IphoneFrame} alt="iphone-frame" />
          <div className="verification__iphone-screen">
            <Image src={IphoneScreen} alt="iphone-screen" />
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
                  : currentIndex === index
                  ? ''
                  : '380px',
                translateY: isSmall
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

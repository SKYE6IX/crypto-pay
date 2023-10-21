'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnonymousImageOne from '../../assests/anonymous-image-one.png';
import AnonymousImageTwo from '../../assests/anonymous-image-two.png';
import AnonymousImageThree from '../../assests/anonymous-image-three.png';
import AnonymousImageFour from '../../assests/anonymous-image-four.png';
import { GetCurrentIndex } from '../../helper';
import { useMediaQuery } from '@/hook/useMediaQuery';
import './styles/anonymous.scss';

interface AnonymousListType {
  src: any;
}
const anonymousMsgList: AnonymousListType[] = [
  {
    src: AnonymousImageOne,
  },
  {
    src: AnonymousImageTwo,
  },
  {
    src: AnonymousImageThree,
  },
  {
    src: AnonymousImageFour,
  },
];

const Anonymous = () => {
  const isSmall = useMediaQuery('(max-width:1024px)');
  const { currentIndex } = GetCurrentIndex(anonymousMsgList);
  return (
    <div className="anonymous">
      <div className="anonymous__images">
        {anonymousMsgList.map((img, index) => (
          <motion.div
            key={index}
            className="anonymous__images-wrapper"
            animate={{
              width: isSmall
                ? currentIndex === index
                  ? ''
                  : '215px'
                : currentIndex === index
                ? ''
                : '340px',
              translateY: isSmall
                ? currentIndex === index
                  ? ['-1px', '5px']
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
            <Image src={img.src} alt="image-display-message" />
          </motion.div>
        ))}
      </div>
      <div className="anonymous__header-texts">
        <h3>
          Anonymous <br />
          payments
        </h3>
        <p>
          Use <b>allow_anonymous</b> parameter <br />
          in <span>createInvoice</span> method to give user <br />
          an option to remain private
        </p>
      </div>
    </div>
  );
};

export default Anonymous;

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnonymousImageOne from '../../assests/anonymous-image-one.png';
import AnonymousImageTwo from '../../assests/anonymous-image-two.png';
import AnonymousImageThree from '../../assests/anonymous-image-three.png';
import AnonymousImageFour from '../../assests/anonymous-image-four.png';
import { getCurrentIndex } from '../../helper';
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
  const { currentIndex } = getCurrentIndex(anonymousMsgList);
  return (
    <div className="anonymous">
      <div className="anonymous__images">
        {anonymousMsgList.map((img, index) => (
          <motion.div
            key={index}
            className="anonymous__images-wrapper"
            initial={{
              translateY: '0px',
              zIndex: 1,
            }}
            animate={{
              width: currentIndex === index ? '' : '340px',
              translateY: currentIndex === index ? ['-1px', '10px'] : '-1px',
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
'use client';
import Image from 'next/image';
import StatImageOne from '../../assests/stat-image-one.svg';
import StatImageTwo from '../../assests/stat-image-two.svg';
import StatImageThree from '../../assests/stat-image-three.svg';
import StatImageFour from '../../assests/stat-image-four.svg';
import { getCurrentIndex } from '../../helper';
import './styles/stat.scss';

interface StatListType {
  src: any;
}

const statsImageList: StatListType[] = [
  {
    src: StatImageOne,
  },
  {
    src: StatImageTwo,
  },
  {
    src: StatImageThree,
  },
  {
    src: StatImageFour,
  },
];

const Stat = () => {
  const { currentIndex } = getCurrentIndex(statsImageList);
  return (
    <div className="stat">
      <div className="stat__images">
        {statsImageList.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt="stat-image"
            style={{
              opacity: currentIndex === index ? '1' : '0.5',
              zIndex: currentIndex === index ? '2' : '1',
            }}
          />
        ))}
      </div>
      <div className="stat__header-text">
        <h3>Payment statistics</h3>
        <p>
          Open <span>@CryptoBot</span>, go to <span>Crypto Pay</span> and{' '}
          <span>My Apps</span>, <br />
          App Name to get Statistics
        </p>
      </div>
    </div>
  );
};

export default Stat;

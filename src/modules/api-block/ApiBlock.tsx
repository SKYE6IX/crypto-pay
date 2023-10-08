'use client';
import Image from 'next/image';
import BgImage from './assets/background-image.webp';
import BgImageSmall from './assets/background-image-small.webp';
import BgGradientSmall from './assets/gradient-background-small.png';
import BgGradient from './assets/gradient-background.png';
import { useMediaQuery } from '@/hook/useMediaQuery';
import './styles/api-block.scss';

const ApiBlock = () => {
  const isSmall = useMediaQuery('(max-width:768px)');
  return (
    <section className="api-block">
      <div className="api-block__inner-container">
        <div className="api-block__header-wrapper">
          <div className="api-block__header-text">
            <div className="api-block__header-text-title">
              <h2>Crypto Pay API</h2>
            </div>
            <div className="api-block__header-text-base-text">
              <p>
                Explore available methods and types <br />
                and integrate them in any programming <br />
                language.
              </p>
            </div>
            <div className="api-block__header-text-button">
              <button>Open API Docs</button>
            </div>
          </div>
        </div>

        <div className="api-block-image">
          <div className="api-block-image__wrapper">
            <Image src={isSmall ? BgImageSmall : BgImage} alt="bg-image" />
          </div>
        </div>
        <Image
          src={isSmall ? BgGradientSmall : BgGradient}
          alt="background-gradient"
          className="gradient-background"
        />
      </div>
    </section>
  );
};

export default ApiBlock;

import Image from 'next/image';
import BgImage from './assets/background-image.webp';
import './styles/api-block.scss';

const ApiBlock = () => {
  return (
    <section className="api-block">
      <div className="api-block__inner-container">
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
        <div className="api-block-image">
          <div className="api-block-image__wrapper">
            <Image src={BgImage} alt="bg-image" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="550"
            viewBox="0 0 1200 550"
            fill="none"
          >
            <g
              style={{
                mixBlendMode: 'overlay',
                filter: 'url(#filter0_f_955_4205)',
              }}
            >
              <path
                d="M1821.59 -896.841C1911.57 -333.082 400.407 685.333 -591.589 973.994C-1648.28 1224.9 -3190 1625.98 -903.38 1223.04C1383.24 820.103 2292.08 459.935 2460.67 330.218L1821.59 -896.841Z"
                fill="url(#paint0_linear_955_4205)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_955_4205"
                x="-2202.37"
                y="-1010.84"
                width="4777.04"
                height="2519.27"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="57"
                  result="effect1_foregroundBlur_955_4205"
                />
              </filter>
              <linearGradient
                id="paint0_linear_955_4205"
                x1="619.244"
                y1="286.824"
                x2="821.605"
                y2="907.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.63" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ApiBlock;

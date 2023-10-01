'use client';
import { useState } from 'react';
import Image from 'next/image';
import { descriptionData } from './descriptionData';
import './styles/usecases.scss';

const UsecasesBlock = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleSetPagination = (pagination: number) => {
    setCurrentIndex(pagination);
  };

  return (
    <div className="usecases-block">
      <div className="usecases-block__inner-container">
        <div className="usecases-block__content">
          <div className="usecases-block__images">
            <Image
              src={descriptionData[currentIndex].image}
              alt="usecases-image"
            />
          </div>
          <div className="usecases-block__description">
            <div className="usecases-block__title">
              {descriptionData[currentIndex].title}
            </div>
            <div className="usecases-block__base-text">
              {descriptionData[currentIndex].base_text}
            </div>
            <div className="usecases-block__button">
              <button>Open API Docs</button>
            </div>
          </div>
          <div className="usecases-block__pagination">
            <div className="usecases-block__pagination-number">
              <span>{descriptionData[currentIndex].pagination_number}</span>
            </div>
            <div className="stick-container">
              <div
                className={`usecases-block__pagination-stick_active usecases-block__pagination-stick_active_${
                  currentIndex === 0
                    ? 'first'
                    : currentIndex === 1
                    ? 'second'
                    : currentIndex === 2
                    ? 'third'
                    : ''
                }`}
              ></div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="usecases-block__pagination-stick"
                  onClick={() => handleSetPagination(index)}
                ></div>
              ))}
            </div>
            <div className="usecases-block__pagination-number">
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsecasesBlock;

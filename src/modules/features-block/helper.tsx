'use client';
import { useState, useEffect, useMemo, useRef } from 'react';

export const getCurrentIndex = (arrayList: any[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const changeIndex = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (currentIndex < arrayList.length - 1) {
        changeIndex();
      } else {
        setCurrentIndex(0);
      }
    }, 2000);
    return () => {
      clearInterval(intervalID);
    };
  }, [currentIndex]);
  return { currentIndex };
};

export const animateFunction = (arrayList: any[]) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const size = useMemo(() => arrayList.length, []);
  const timer = useRef<NodeJS.Timeout | number>(-1);
  const map = useMemo(() => {
    const map = new Map<number, number>();
    const len = arrayList.length;
    let i = len;
    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }
    return map;
  }, [activeIndex]);

  useEffect(() => {
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      2000
    );
    return () => clearInterval(timer.current as number);
  }, [size]);
  return { map, size, activeIndex };
};

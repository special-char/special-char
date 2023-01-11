'use client';
import React, { useEffect, useState } from 'react';

type Props = {};
function ImageTransition() {
  const [transitionPer, setTransitionPer] = useState<boolean>(false);
  useEffect(() => {
    const perTimeOut = setTimeout(() => {
      setTransitionPer(true);
    }, 100);

    return () => {
      clearTimeout(perTimeOut);
      setTransitionPer(false);
    };
  }, []);

  return (
    <div
      className={`z-[1] bg-neutral-300 w-full aspect-image absolute overflow-hidden ${
        transitionPer ? 'translate-x-full' : ''
      }  duration-300 `}
    ></div>
  );
}

export default ImageTransition;

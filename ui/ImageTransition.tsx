'use client';
// import { useIntersection } from '@/hooks/useIntersection';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};
const ImageTransition = () => {
  const divRef = useRef();
  const [transitionPer, setTransitionPer] = useState<boolean>(false);
  // const inViewPort = useIntersection(divRef, '0px');
  // console.log({ inViewPort });
  // useEffect(() => {
  //   const perTimeOut = setTimeout(() => {
  //     if (inViewPort) {
  //       setTransitionPer(inViewPort);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearTimeout(perTimeOut);
  //     setTransitionPer(false);
  //   };
  // }, []);

  // useEffect(() => {
  //   const perTimeOut = setTimeout(() => {
  //     if (inViewPort) {
  //       setTransitionPer(inViewPort);
  //     }
  //   }, 300);
  //   return () => {
  //     clearTimeout(perTimeOut);
  //   };
  // }, [transitionPer, inViewPort]);

  return (
    <div
      ref={divRef}
      className={`z-[1] bg-neutral-300 w-full aspect-image absolute overflow-hidden ${
        transitionPer ? 'translate-x-full' : ''
      }  duration-300 `}
    ></div>
  );
};

export default ImageTransition;

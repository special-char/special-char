'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import '@/styles/scrollbutton.css';

type Props = {};

const Srollbutton = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
  	in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <button
        id="myBtn"
        title="Go to top"
        className="srcbtn"
        onClick={goToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        Up
      </button>
    </div>
  );
};

export default Srollbutton;

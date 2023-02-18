'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import '@/styles/scrollbutton.css';

type Props = {};

const Srollbutton = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
  	in place of 'smooth' */
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    document.addEventListener('scroll', toggleVisible);

    return () => {
      document.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div>
      <Link
        href="/"
        id="myBtn"
        title="Go to top"
        className="srcbtn"
        onClick={goToTop}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        Up
      </Link>
    </div>
  );
};

export default Srollbutton;

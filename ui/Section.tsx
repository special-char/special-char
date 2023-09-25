import Image from 'next/image';
import '@/styles/video.css';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Section = (props: Props) => {
  return (
    <div className="effort">
      <div className="effort__image md:order-1">
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="effort__info">
        <p className="pb-8 text-xxl">
          We bring together innovative designers, pixel perfect developers and
          data driven strategy to create a boutique experience at enterprise
          scale.
        </p>
        <div>
          <Link
            href="https://www.youtube.com/watch?v=wkhRnmLxKH4"
            className="relative"
          >
            <Image
              src="https://assets.website-files.com/6315d6de2357050021f26e96/63172afabaf3d9640b2e3b00_play-p-500.png"
              alt="video"
              width={100}
              height={100}
              className="vidimg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;

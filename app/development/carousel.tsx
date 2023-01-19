'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import '@/styles/carousel.css';
import Link from 'next/link';

type Props = {};
const CroData = [
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
];

const Crocard = (props: Props) => {
  useEffect(() => {
    document.getElementById('carousel');
    let windowWidth = window.innerWidth;
    let horizontalLength =
      document.querySelector('.carousel--sticky')?.scrollWidth;

    let distFromTop = document.querySelector('.carousel')?.offsetTop;

    let scrollDistance = distFromTop + horizontalLength - windowWidth;
    document.querySelector('.carousel');
    if (windowWidth > 425) {
      document.querySelector('.carousel')!.style.height =
        horizontalLength + 'px';
    }

    window.onscroll = function () {
      let scrollTop = window.pageYOffset;

      if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector('.carousel--wrapper')!.style.transform =
          'translateX(-' + (scrollTop - distFromTop) + 'px)';
      }
    };
  }, []);

  return (
    <section className="carousel ">
      <div className="carousel--sticky">
        <h3>Work</h3>
        <div className="carousel--wrapper">
          {CroData.map((crodData, i) => (
            <Link key={i} className="carousel__card" href="#">
              <Image
                src={crodData.url}
                alt="projects done by us"
                fill
                className="carousel__card__image"
              />

              <div className="carousel__card__chipset">
                <h3 className=" ">{crodData.name}</h3>
                <p className="chip">{crodData.chip}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crocard;

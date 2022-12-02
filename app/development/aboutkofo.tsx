import '@/styles/about.css';
import Image from 'next/image';
import React from 'react';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {};

function Aboutkofo({}: Props) {
  return (
    <section className="aboutkofo">
      <div className="aboutkofo__image">
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="aboutkofo__content">
        <h2>About Kofo</h2>
        <p className="aboutkofo__p">
          We are an award-winning branding and web agency committed to
          excellence since forever.
          <br /> <br /> We set the standard of exceptional design creatively,
          technically, sustainably, and ethically so that you can make the
          extraordinary impact impact that you seek.
        </p>

        <div className="about__button">
          <button className="btn btn--primary">View On Designer</button>
          <RoketSvg className="about__svg" />
        </div>
      </div>
    </section>
  );
}

export default Aboutkofo;

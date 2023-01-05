import '@/styles/about.css';
import Image from 'next/image';
import React from 'react';
import RoketSvg from '@/public/icons/roket.svg';
import Link from 'next/link';

type Props = {};

function Aboutkofo({}: Props) {
  return (
    <section className="about ">
      <div className="about__image">
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="about__content">
        <h2>About Kofo</h2>
        <p className="about__p">
          We are an award-winning branding and web agency committed to
          excellence since forever.
          <br /> <br /> We set the standard of exceptional design creatively,
          technically, sustainably, and ethically so that you can make the
          extraordinary impact impact that you seek.
        </p>

        <div className="about__button">
          <Link href="/" className="btn btn--primary">
            View On Designer
          </Link>
          <RoketSvg className="about__svg" />
        </div>
      </div>
    </section>
  );
}

export default Aboutkofo;

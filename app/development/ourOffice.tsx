import React from 'react';
import OfficeSvg from '@/public/icons/office.svg';
import '@/styles/ourOffice.css';
import Link from 'next/link';

type Props = {};

const OurOffice = (props: Props) => {
  return (
    <section id="ourOffice" className="ourOffice">
      <div className="text-center md:mx-24 md:mb-6 lg:mx-40 ">
        <h2 className="ourOffice__title">Our Offices</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="ourOffice__content bg-secondary3 shadow-dark">
        <div className="ourOffice__card">
          <div className="ourOffice__card__content">
            <OfficeSvg className="w-16" />
            <div>
              <h4 className="ourOffice__card__title">Ahmedabad</h4>
              <address className="grid-rows-span-3 text-neutral-600 grid">
                <a className="w-auto pb-2" href={`#`}>
                  thespecial@character.com
                </a>
                <a className="w-auto pb-2" href={`#`}>
                  +91 1800180018
                </a>
                <div className="mb-4">
                  B-604/605, Ganesh Glory11, <br />
                  SG-Hwy, Ahmedabad,
                  <br /> Gujrat 382470
                </div>
              </address>
              <Link href="/" className="btn btn--primary">
                Find on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;

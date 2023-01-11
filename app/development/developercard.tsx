import '@/styles/developercard.css';
import React from 'react';
import Image from 'next/image';
import SocialIcon from './SocialIcon';
import TwoLineSvg from '@/public/icons/twoline.svg';

type Props = {};
const teacherData = [
  {
    id: 1,
    img: 'https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7a53037e871_team-1.jpg',
    title: 'John Doe',
    desc: 'Co Founder',
  },
  {
    id: 2,
    img: 'https://assets.website-files.com/6315d6de2357050021f26e96/631875d3e12953fde067ee80_team-4.jpg',
    title: 'Tim Baker',
    desc: 'Marketing Expert',
  },
  {
    id: 3,
    img: 'https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7c38b37e87a_team-2.jpg',
    title: 'Demi Mason',
    desc: 'Media Expert',
  },
  {
    id: 4,
    img: 'https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7571d37e872_team-3.jpg',
    title: 'Robert Bozo',
    desc: 'Development',
  },
];

const Developercard = (props: Props) => {
  return (
    <section className="py-20 relative">
      <h2 className="h2">The Team</h2>
      <div className="card">
        {teacherData.map((x) => (
          <a key={x.id} href="#">
            <div className="card__image">
              <Image src={x.img} alt="" className="" fill />
            </div>
            <div className="card__body">
              <h3 className="card__title">{x.title}</h3>
              <p className="card__desc">{x.desc}</p>
              <SocialIcon />
            </div>
          </a>
        ))}
      </div>
      <TwoLineSvg className="card__design" />
    </section>
  );
};

export default Developercard;

import React from 'react';
import '@/styles/work.css';
import Link from 'next/link';
import GraphicSvg from '@/public/icons/graphic.svg';
import DevelopmentSvg from '@/public/icons/development.svg';
import TrainingSvg from '@/public/icons/training.svg';

type Props = {};

const WorkData = [
  {
    id: 1,
    svg: <GraphicSvg />,
    title: 'Graphic Designer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    svg: <DevelopmentSvg />,
    title: 'Development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    svg: <TrainingSvg />,
    title: 'Training',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

const Work = (props: Props) => {
  return (
    <section id="work" className="work">
      <h3 className="work__title">
        We worry about the details so you don't have to. When you work with our
        web agency, you can be certain that your website meets every standard.
      </h3>
      <div className="work__item">
        {WorkData.map((work) => {
          return (
            <div key={work.id} className="work__card">
              <div className="work__card__content">
                <figure className="work__card__svg ">{work.svg}</figure>
                <div>
                  <h4 className="work__card__title">{work.title}</h4>
                  <p className="work__card__desc">{work.description}</p>
                  <Link className="font-semibold" href="#">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

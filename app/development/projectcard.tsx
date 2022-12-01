import '@/styles/projectcard.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};
const projectdata = [
  {
    id: 1,
    img: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631762feeb3d7b7d675f5c37_blog-3.jpg',
    button: 'News',
    description: 'Curating a workplace that inspires all of us',
    date: 'February 3,2021',
    cont: 'Read More',
  },
  {
    id: 2,
    img: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631763088c207c7278f87176_blog-1.jpg',
    button: 'Design',
    description: 'Designers who changed the web with Webflow',
    date: 'February 25,2021',
    cont: 'Read More',
  },
];

function Projectcard({}: Props) {
  return (
    <section className="bg-secondary3 py-10">
      <div className="header">
        <h2 className="pl-5">From Blog</h2>
        <div>
          <Link href="#" className="btn btn--white border-0">
            View All Post
          </Link>
        </div>
      </div>
      <div className="projectcard">
        {projectdata.map((x) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-neutral-400">
            <Link href="#">
              <Image
                src={x.img}
                alt=""
                className="projectcard__image"
                height={500}
                width={700}
              />
            </Link>

            <div className="projectcard__body">
              <div className="projectcard__content">
                <button className="btn btn--white p-3">{x.button}</button>
                <span>{x.date}</span>
              </div>
              <h3 className="text-[28px]">{x.description}</h3>
              <div>{x.cont}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projectcard;

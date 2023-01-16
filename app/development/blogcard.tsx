import '@/styles/blogcard.css';
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
  {
    id: 3,
    img: 'https://assets.website-files.com/6315d6de235705e568f26e9b/63176314bf708f01020ea732_blog-2.jpg',
    button: 'Code',
    description: 'Communication between studio departments',
    date: 'March 9,2021',
    cont: 'Read More',
  },
];

function Blogcard({}: Props) {
  return (
    <section className="bg-secondary3 py-10">
      <div className="header">
        <h2>From Blog</h2>
        <div>
          <Link href="#" className="btn btn--white border-0 pl-1">
            View All Post
          </Link>
        </div>
      </div>
      <div className="blogcard">
        {projectdata.map((x) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-neutral-400">
            <Link href="#">
              <div className="blogcard__image">
                <Image src={x.img} alt="" fill />
              </div>
            </Link>

            <div className="blogcard__body">
              <div className="blogcard__content">
                <button className="btn btn--white p-3">{x.button}</button>
                <span className="text-base">{x.date}</span>
              </div>
              <h3 className="h3">{x.description}</h3>
              <div className="text-base">{x.cont}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogcard;

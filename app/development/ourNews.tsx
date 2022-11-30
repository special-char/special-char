import React from 'react';
// import Card from "./card";
import Title from './title';
import '@/styles/ourNews.css';
import '@/styles/card.css';
import '@/styles/title.css';

type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'Work with Us',
  title: 'Our',
  title1: 'News',
  description: 'We share our thoughts on design. We design awesome things.',
};

const NewsData = [
  {
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    btn: 'News',
    date: 'September 1, 2022',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    href: '#',
  },
  {
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    btn: 'Design',
    date: 'February 25, 2022',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    href: '#',
  },
  {
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    btn: 'Design',
    date: 'February 25, 2022',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    href: '#',
  },
];

const OurNews = ({ btn, description, title }: Props) => {
  return (
    <section id="ourNews" className="ourNews">
      <div className="ourNews__title">
        <h1>
          {data.title}
          <br />
          <span className="text-secondary1 font-normal">{data.title1}</span>
        </h1>
        <div>
          <p>{data.description}</p>
          <button className="btn btn--primary">{data.btn}</button>
        </div>
      </div>
      <div className="ourNews__content">
        {/* {NewsData.map((card) => (
          <Card data={card} />
        ))} */}
      </div>
    </section>
  );
};

export default OurNews;

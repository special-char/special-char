import React from "react";
import Card from "./card";
import Title from "./title";
import "@/styles/ourNews.css";
import "@/styles/card.css";

type Props = {};

const NewsData = [
  {
    url: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg",
    btn: "News",
    date: "September 1, 2022",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: "#",
  },
  {
    url: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg",
    btn: "Design",
    date: "February 25, 2022",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: "#",
  },
  {
    url: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg",
    btn: "Design",
    date: "February 25, 2022",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: "#",
  },
];

const OurNew = (props: Props) => {
  return (
    <section id="ourNews" className="ourNews">
      {/* <Title /> */}
      <div className="ourNews__content">
        {NewsData.map((card) => (
          <Card data={card} />
        ))}
      </div>
    </section>
  );
};

export default OurNew;

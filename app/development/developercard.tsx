import "@/styles/developercard.css";
import React from "react";
import Image from "next/image";
import FacebookSvg from "@/public/icons/facebook.svg";
import InstagramSvg from "@/public/icons/instagram.svg";
import TwitterSvg from "@/public/icons/twitter.svg";

type Props = {};
const teacherData = [
  {
    id: 1,
    img: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7a53037e871_team-1.jpg",
    title: "John Doe",
    desc: "Co Founder",
    svg: [
      { svg: <FacebookSvg /> },
      { svg: <InstagramSvg /> },
      { svg: <TwitterSvg /> },
    ],
  },
  {
    id: 2,
    img: "https://assets.website-files.com/6315d6de2357050021f26e96/631875d3e12953fde067ee80_team-4.jpg",
    title: "Tim Baker",
    desc: "Marketing Expert",
    svg: [
      { id: 1, svg: <FacebookSvg /> },
      { id: 2, svg: <InstagramSvg /> },
      { id: 3, svg: <TwitterSvg /> },
    ],
  },
  {
    id: 3,
    img: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7c38b37e87a_team-2.jpg",
    title: "Demi Mason",
    desc: "Social Media Expert",
    svg: [
      { svg: <FacebookSvg /> },
      { svg: <InstagramSvg /> },
      { svg: <TwitterSvg /> },
    ],
  },
  {
    id: 4,
    img: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7571d37e872_team-3.jpg",
    title: "Robert Bozo",
    desc: "Development",
    svg: [
      { id: 1, svg: <FacebookSvg /> },
      { id: 2, svg: <InstagramSvg /> },
      { id: 3, svg: <TwitterSvg /> },
    ],
  },
];

const Developercard = (props: Props) => {
  return (
    <section className="px-container ">
      <div className="main">
        {teacherData.map((x) => (
          <a key={x.id} href="#" className="">
            <Image src={x.img} alt="" height={500} width={500} />
            <div className="card__body">
              <h3 className="card__title">{x.title}</h3>
              <p className="card__desc">{x.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Developercard;

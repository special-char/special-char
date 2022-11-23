import "@/styles/funfacts.css";
import React from "react";
import Image from "next/image";

type Props = {};
const data = [
  {
    id: 1,
    title: "7",
    description: "Members",
  },

  {
    id: 2,
    title: "340+",
    description: "Project Done",
  },
  {
    id: 3,
    title: "99%",
    description: "Top Feedback",
  },
  {
    id: 4,
    title: "4",
    description: "Global Offices",
  },
];
function Funfacts({}: Props) {
  return (
    <section className=" facts">
      <div className="facts__header">
        <div className="facts__image">
          <Image
            src="https://assets.website-files.com/6315d6de2357050021f26e96/6317511da3f8cf2ff69330b3_photo-3.jpg"
            alt=""
            fill
            className="aspect-image"
          />
        </div>
        <div className=" facts__content">
          <h2>Fun Facts</h2>
          {data.map((x) => (
            <>
              <div className="">
                <h2>{x.title}</h2>
                <span className="">{x.description}</span>
              </div>
            </>
          ))}
          <div className="">
            <button className="btn btn--primary">Join us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funfacts;

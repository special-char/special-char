import "@/styles/funfacts.css";
import React from "react";
import Image from "next/image";

type Props = {};

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
          <h3 className=" font-bold">Fun Facts</h3>
          <div className="">
            <h3 className=" font-bold">7</h3>
            <span className="">Members</span>
          </div>
          <div className="">
            <h3 className=" font-bold">340 + </h3>
            <span>Project Done</span>
          </div>
          <div className="">
            <h3 className=" font-bold">99 %</h3>
            <span>Top Feedback</span>
          </div>
          <div className="">
            <h3 className=" font-bold">4</h3>
            <span>Global Officies</span>
          </div>
          <div className="">
            <button className="btn btn--primary">Join us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funfacts;

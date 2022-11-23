import React from "react";
import "@/styles/video.css";
import Iceberg from "@/public/Iceberg.svg";

type Props = {};

const Video = (props: Props) => {
  return (
    <section className="px-container">
      <div className="company">
        <Iceberg />
        <Iceberg />
        <Iceberg />
        <Iceberg />
        <Iceberg />
      </div>
      <div className="effort">
        <img
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
          alt="Hardwork"
          className="md:order-1"
        />
        <div>
          <p className="lg:text-3xl pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi
            repudiandae ipsum vero. Quibusdam, numquam quas? Iste, quasi.
            Molestias cupiditate eius voluptates debitis beatae cumque?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;

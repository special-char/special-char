import React from "react";
import Image from "next/image";
import "@/styles/crocard.css";

type Props = {};
const CroData = [
  {
    id: 1,
    url: "https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg",
    name: "Confrence",
    chip: "Art&nbsp;Direction,Design",
  },
  {
    id: 2,
    url: "https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg",
    name: "Confrence",
    chip: "Art&nbsp;Direction,Design",
  },
  {
    id: 3,
    url: "https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg",
    name: "Confrence",
    chip: "Art&nbsp;Direction,Design",
  },
  {
    id: 4,
    url: "https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg",
    name: "Confrence",
    chip: "Art&nbsp;Direction,Design",
  },
  {
    id: 5,
    url: "https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg",
    name: "Confrence",
    chip: "Art&nbsp;Direction,Design",
  },
];

const Crocard = (props: Props) => {
  return (
    <section className="bg-secondary2 px-container">
      <div className="carosol">
        {CroData.map((crodData) => (
          <div key="cardData.id" className=" carocard">
            <div>
              <Image src={crodData.url} alt="crow" fill />
            </div>
            <div className="chipset">
              <h3 className=" ">{crodData.name}</h3>
              <p className="chip">{crodData.chip}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crocard;

import React from 'react';
import Image from 'next/image';
import '@/styles/crocard.css';

type Props = {};
const CroData = [
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
  {
    url: 'https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg',
    name: 'Confrence',
    chip: 'Art&nbsp;Direction,Design',
  },
];

const Crocard = (props: Props) => {
  return (
    <section className="">
      <h2 className="py-4">Feactured Work</h2>
      <div className="carosol">
        {CroData.map((crodData) => (
          <div className="carocard">
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

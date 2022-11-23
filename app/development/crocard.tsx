import React from "react";
import Image from "next/image";

type Props = {};

const Crocard = (props: Props) => {
  return (
    <section className="bg-secondary2">
      <div className="px-container bg-secondary3 aspect-square">
        <img
          src="https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg"
          alt="crow"
        />
        <div className="absolute bottom-2 text-center grid justify-end content-center mx-auto">
          <h3 className=" text-neutral-200">Confrence</h3>
          <p className=" chip">Art Direction,Design</p>
        </div>
      </div>
    </section>
  );
};

export default Crocard;

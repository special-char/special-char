import React from "react";
import Image from "next/image";
import "@/styles/crocard.css";

type Props = {};

const Crocard = (props: Props) => {
  return (
    <section className="bg-secondary2">
      <div className="carosol">
        <div className="carocard">
          <div>
            <Image
              src="https://assets.website-files.com/6315d6de235705e568f26e9b/631736ebb25d2476070021f5_work-1-p-1080.jpg"
              alt="crow"
              fill
            />
          </div>
          <div className="chipset">
            <h3 className=" ">Confrence</h3>
            <p className="chip">Art Direction,Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crocard;

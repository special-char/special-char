import Image from "next/image";
import React from "react";
import "@/styles/review.css";

type Props = {
  rate?: number;
};

const Review = ({ rate = 0 }: Props) => {
  return (
    <section>
      <div className="review">
        <div>O O O O O</div>
        {/* <div className="flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((x) => (
            <div
              className={clsx("mask mask--star h-6 w-6 bg-secondary2", {
                "bg-neutral-300": x > rate,
              })}
            ></div>
          ))}
        </div> */}
        <p>
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          repellat sapiente labore enim, maxime repellendus "
        </p>
        <div className="actionbar">
          <Image
            className="avatar"
            src="https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de2357051938f26f30_team-2.jpg"
            alt="avatar"
            width={80}
            height={80}
          />
          <div>
            <h3>Gojo Satoru</h3>
            <p>Company Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

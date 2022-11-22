import "@/styles/card.css";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import SocialIcon from "./SocialIcon";
import "@/styles/socialicon.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card__image">
        <Image
          src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg"
          alt="image"
          fill
        />
      </div>
      <div className="card__body">
        <div className="flex gap-3 items-baseline content-start">
          <button className="btn btn--white py-2 px-2">News</button>
          <p className="card__body__date">September 1, 2022</p>
        </div>
        <h3 className="card__body__title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h3>
        <Link href="#" className="text-sm">
          Read More
        </Link>
        {/* <SocialIcon /> */}
      </div>
    </div>
  );
}

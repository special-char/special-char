import "@/styles/icon.css";
import React from "react";
import FacebookSvg from "@/public/icons/facebook.svg";
import InstagramSvg from "@/public/icons/instagram.svg";
import TwitterSvg from "@/public/icons/twitter.svg";
import LinkedinSvg from "@/public/icons/linkedin.svg";
import DribbbleSvg from "@/public/icons/dribbble.svg";
import Link from "next/link";

type Props = {};

const Icon = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center gap-6">
        <Link href={"./Button"} className="icon">
          <LinkedinSvg />
        </Link>
        <Link href={"./Button"} className="icon">
          {" "}
          <FacebookSvg />{" "}
        </Link>
        <Link href={"./Button"} className="icon">
          {" "}
          <TwitterSvg />{" "}
        </Link>
        <Link href={"./Button"} className="icon">
          {" "}
          <InstagramSvg />{" "}
        </Link>
        <Link href={"./Button"} className="icon">
          {" "}
          <DribbbleSvg />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Icon;

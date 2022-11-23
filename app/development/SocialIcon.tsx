import React from "react";

import "@/styles/socialicon.css";
import Icon from "@/ui/Icon";
import Link from "next/link";
type Props = {};

const socialicon = [
  {
    icon: "linkedin",
    link: "https://www.linkedin.com",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com",
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com",
  },
  {
    icon: "twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "dribbble",
    link: "https://www.dribbble",
  },
];

const SocialIcon = (props: Props) => {
  return (
    <div className="socialicons">
      {socialicon.map((icon) => (
        <Link key={icon.icon} href={icon.link} target="_blank">
          <Icon
            className="hover:bg-neutral-300 hover:scale-110 ease-in-out duration-300 hover:rounded-full"
            name={icon.icon}
            height={20}
            width={20}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcon;

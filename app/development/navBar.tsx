import React from "react";
import Plus from "@/public/icons/plus.svg";
import "@/styles/navBar.css";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header>
      <div className="Navigation">
        <h2>TSC</h2>
        <input type="checkbox" id="clicked" className="clicked" name="rGroup" />
        <label htmlFor="clicked" className="humbur">
          {/* <button> */}
          <Plus />
          {/* </button> */}
        </label>
      </div>
      <nav className="flex flex-col justify-between">
        <ul>
          <li>
            <a>
              <h2>Home</h2>
            </a>
          </li>
          <li>
            <a>
              <h2>About</h2>
            </a>
          </li>
          <li>
            <a>
              <h2>News</h2>
            </a>
          </li>
          <li>
            <a>
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
        <hr />
        <div className="Navigation__footer">
          <SocialIcon />
          <div className="Navigation__footer__location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
            <p>London,UK</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

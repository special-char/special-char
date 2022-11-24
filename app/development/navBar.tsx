import React from "react";
import Plus from "@/public/icons/plus.svg";
import "@/styles/navBar.css";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <input type="checkbox" id="click" className="btn" />
      <label>
        <h2>TSC</h2>
      </label>
      <label htmlFor="click" className="humbur">
        {/* <button> */}
        <Plus />
        {/* </button> */}
      </label>
      <ul>
        <li>
          <a>
            <h2>Home</h2>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

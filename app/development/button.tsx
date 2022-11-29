import "@/styles/button.css";
import React from "react";

type Props = {};

function Button({}: Props) {
  return (
    <div className="pt-12 text-center">
      <div className="p-10 ">
        <button className="btn btn--primary"> View on Designer</button>
      </div>
      <div className="">
        <button className="btn btn--primary"> Join Us</button>
      </div>
      <div className="p-10">
        <button className="btn btn--secondary">Stay in Touch</button>
      </div>
      <button className="btn btn--primary">Work With Us</button>
      <div className="p-10">
        <button className="btn btn--primary">View All Work</button>
      </div>
    </div>
  );
}

export default Button;

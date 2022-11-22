import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="text-9xl">
      Card
      {/* <button className="btn btn--primary">submit</button> */}
      <button className="btn btn--white">stay in touch</button>
      <span className="chip chip--primary text-primary">use interface</span>
    </div>
  );
};

export default Card;

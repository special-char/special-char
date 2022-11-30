import React from 'react';

type Props = {};

const Srollbutton = (props: Props) => {
  return (
    <div>
      <button
        id="myBtn"
        title="Go to top"
        className="h-16 w-16 rounded-full bg-neutral-100 text-neutral-200 fixed bottom-10 right-4 hover:bg-primary hover:text-neutral-400 transition-all duration-300 active:bg-neutral-300"
      >
        Up
      </button>
    </div>
  );
};

export default Srollbutton;

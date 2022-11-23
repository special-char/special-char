import React from "react";
import Card from "./card";
import Crocard from "./crocard";
import Footer from "./footer";
import Video from "./video";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Crocard />
      {/* <Video />
      <Card />
      <Footer /> */}
    </>
  );
};

export default Page;

import React from "react";
import Banner from "./banner";
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
      {/* <Card /> */}
      <Banner />
    </>
  );
};

export default Page;

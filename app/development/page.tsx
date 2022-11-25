import React from "react";
import NavBar from "./navBar";
import Banner from "./banner";
import Card from "./card";
import Crocard from "./crocard";
import Footer from "./footer";
import Video from "./video";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <Crocard />
      {/* <Review /> */}
      <Video />
      {/* <Card /> */}
      <Footer />
    </>
  );
};

export default Page;

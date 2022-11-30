import React from "react";
import Aboutkofo from "./aboutkofo";
import Banner from "./banner";
import Blackapple from "./blackapple";
import Button from "./button";
import Developercard from "./developercard";
import Funfacts from "./funfacts";
import Icon from "./icon";
import NavBar from "./navBar";

import Crocard from "./crocard";
import Footer from "./footer";
import Video from "./video";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <NavBar /> */}
      <Banner />

      <Video />
      {/* <Crocard />  */}
      {/* <Button /> */}
      {/* <Icon /> */}
      {/* <Developercard /> */}
      <Funfacts />
      <Aboutkofo />
      {/* <Blackapple /> */}
      <Footer />
    </>
  );
};

export default Page;

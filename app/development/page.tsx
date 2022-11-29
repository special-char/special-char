import React from "react";
import Aboutkofo from "./aboutkofo";
import Banner from "./banner";
import Card from "./card";
import Contact from "./contact";
import Fromblog from "./fromblog";
import OurNews from "./ourNews";
import OurOffice from "./ourOffice";
import Title from "./title";
import Work from "./work";
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
      <NavBar />
      <Banner />
      <Work />
      <Fromblog />
      <OurNews />
      {/* <Title /> */}
      <OurOffice />
      <Contact />

      <Video />
      <Crocard />
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

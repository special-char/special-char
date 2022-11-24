import React from "react";
import Banner from "./banner";
import Card from "./card";
import Contact from "./contact";
import Fromblog from "./fromblog";
import OurNew from "./ourNew";
import OurOffice from "./ourOffice";
import Title from "./title";
import Work from "./work";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Card /> */}
      <Banner />
      <Work />
      <Fromblog />
      {/* <Title /> */}
      <OurNew />
      <OurOffice />
      <Contact />
    </>
  );
};

export default Page;

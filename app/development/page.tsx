import React from "react";
import Banner from "./banner";
import Button from "./button";
import Developercard from "./developercard";
import Funfacts from "./funfacts";
import Icon from "./icon";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner /> */}
      <Button />
      {/* <Icon /> */}
      <Developercard />
      <Funfacts />
    </>
  );
};

export default Page;

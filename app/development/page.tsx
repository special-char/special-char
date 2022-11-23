import React from "react";
import Button from "./button";
import Developercard from "./developercard";
import Funfacts from "./funfacts";
import Icon from "./icon";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Button />
      <Icon />
      <Developercard />
      <Funfacts />
    </>
  );
};

export default Page;

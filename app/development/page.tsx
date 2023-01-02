import Faq from './faq';
import Testimonial from './testimonial';
import React from 'react';
import Aboutkofo from './aboutkofo';

import Contact from './contact';
import Fromblog from './fromblog';
import OurNews from './ourNews';
import OurOffice from './ourOffice';

import Work from './work';
import Blackapple from './blackapple';
import Button from './button';
import Developercard from './developercard';
import Funfacts from './funfacts';
import Icon from './icon';
import NavBar from './navBar';
import Crocard from './crocard';
import Footer from './footer';
import Video from './video';
import Scrollbutton from './scrollbutton';

const Page = () => {
  return (
    <>
      <Scrollbutton />
      <NavBar />
      <Banner />
      <Video />
      <Crocard />
      <Work />
      <Testimonial />
      <Funfacts />
      <Faq />
      <TitlePage />
      {/* <Card /> */}
      <Fromblog />
      <OurNews />
      {/* <Title /> */}
      <OurOffice />
      <Contact />
      <OurOffice />
      <Button />
      <Icon />
      <Developercard />
      <Aboutkofo />
      <Blackapple />
      <Footer />
      {/* <TitlePage /> */}
    </>
  );
};
export default Page;

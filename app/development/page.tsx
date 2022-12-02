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
import Banner from './banner';
import TitlePage from '@/ui/titlePage';
import Title from './title';
import Projectcard from './projectcard';

const Page = () => {
  return (
    <>
      <NavBar />
      {/* <Title /> */}
      <TitlePage />
      <Banner />
      <Video />
      <Crocard />
      <Work />
      <Testimonial />
      <Funfacts />
      <Contact />
      <Faq />
      <Footer />
      <Fromblog />
      <OurOffice />
      <OurNews />
      <Aboutkofo />

      {/* <Button /> */}

      {/* <Developercard /> */}
      <Aboutkofo />
      <Blackapple />
      <Footer />
      <TitlePage />
    </>
  );
};
export default Page;

import Faq from './faq';
import TitlePage from '@/ui/titlePage';
import Testimonial from './testimonial';
import React from 'react';
import Aboutkofo from './aboutkofo';
import Banner from './Banner';
import Contact from './contact';
import Fromblog from './fromblog';
import OurNews from './ourNews';
import OurOffice from './ourOffice';
import Title from './title';
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
      <NavBar />
      <Banner />
      <Scrollbutton />
      <Video />
      <Crocard />
      <Work />
      {/* <Testimonial /> */}
      <Faq />
      {/* <TitlePage /> */}
      {/* <Card /> */}
      {/* <Fromblog /> */}
      {/* <OurNews /> */}
      {/* <Title /> */}
      {/* <OurOffice /> */}
      <Contact />
      {/* <OurOffice /> */}
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

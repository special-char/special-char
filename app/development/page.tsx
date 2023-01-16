import Faq from './faq';
import TitlePage from '@/ui/titlePage';
import Testimonial from './testimonial';
import React from 'react';
import Aboutkofo from './aboutkofo';
import Banner from './banner';
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

import Crocard from './carousel';
import Footer from './footer';
import Video from './video';
import Scrollbutton from './scrollbutton';
import Blogcard from './blogcard';

const Page = () => {
  return (
    <>
      <NavBar />
      {/* <Title /> */}
      <TitlePage />
      <Banner />
      <Scrollbutton />
      <Video />
      {/* <Crocard /> */}
      <Work />
      <Testimonial />
      <Funfacts />
      <Blogcard />
      <Footer />
    </>
  );
};
export default Page;

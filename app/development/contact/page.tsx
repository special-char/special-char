import React from 'react';
import NavBar from '../navBar';
import Contact from '../contact';
import Scrollbutton from '../scrollbutton';
import Faq from '../faq';
import OurOffice from '../ourOffice';
import Footer from '../footer';

const Page = () => {
  return (
    <>
      <NavBar />
      <Scrollbutton />
      <Contact />
      <OurOffice />
      <Faq />
      <Footer />
    </>
  );
};
export default Page;

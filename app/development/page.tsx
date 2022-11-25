import React from 'react';
import Banner from './banner';
import Card from './card';
import Fromblog from './fromblog';
import Work from './work';

import Faq from './faq';
import TitlePage from '@/ui/titlePage';
import Testimonial from './testimonial';

const Page = () => {
  return (
    <>
      {/* <Card /> */}

      {/* <Work /> */}
      {/* <Fromblog /> */}
      <Testimonial />

      <Banner>
        <div className="">
          <h1></h1>
          <span>this is 2</span>
          <h1>this is 2</h1>
        </div>
      </Banner>
      {/* <Faq /> */}
      {/* <TitlePage
        title="Our clients feedback is important for us."
        desc="Work With Us"
      /> */}
    </>
  );
};
export default Page;

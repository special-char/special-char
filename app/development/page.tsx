import TitlePage from '@/ui/titlePage';
import React from 'react';
import Banner from './Banner';
import Faq from './faq';

import Testimonial from './testimonial';

const Page = () => {
  return (
    <>
      <TitlePage
        title="We are blessed to work with leading brands."
        desc="View Our Work
"
      />
      <Banner />
      <Faq
        title="We are blessed to work with leading brands."
        desc="View Our Work"
      />
      {/* <Testimonial /> */}
    </>
  );
};
export default Page;

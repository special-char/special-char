import TitlePage from '@/ui/titlePage';
import React from 'react';
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
      <Faq
        title="We are blessed to work with leading brands."
        desc="View Our Work"
      />
      <Testimonial
        title="Our clients feedback is important for us."
        desc="Work With Us"
      />
    </>
  );
};
export default Page;

import React from 'react';
import '@/styles/testimonial.css';

import Rating from '@/ui/Rating';
import TitlePage from '@/ui/titlePage';
import ActionBar from '@/ui/ActionBar';

interface Props {}
const Data1 = [
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '"The public Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, magni! is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 2,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '"The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 3,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
];

const Testimonial = (props: Props) => {
  return (
    <section id="Testimonial" className="testimonial">
      <TitlePage
        title="Our clients feedback is important for us."
        desc="Work With Us
"
        className={''}
      />
      <div className="testimonial__section">
        {Data1.map((val) => (
          <div key={val.id} className="testimonial__paragraph">
            <div className="testimonial__star my-4 ">
              <Rating />
            </div>
            <p className="text-center">{val.description}</p>

            <ActionBar />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;

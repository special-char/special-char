import React from 'react';
import '@/styles/testimonial.css';
import clsx from 'clsx';
import TitlePage from '@/ui/titlePage';

type Props = {
  id: any;
  description: string;
  star: any;
};

const Data1 = [
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '"The public Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, magni! is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
  {
    id: 2,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '"The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
  {
    id: 3,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
];

const Testimonial = ({ className, id, description, star }: Props) => {
  return (
    <section
      id={clsx('Testimonial', {
        [className]: !!className,
      })}
      className="testimonial"
    >
      <TitlePage
        title="Our clients feedback is important for us."
        desc="Work With Us
"
        className={''}
      />
      <div key={id} className="">
        {Data1.map((Testimonial1) => (
          <Testimonial1 data1={Testimonial1} />
        ))}{' '}
      </div>
    </section>
  );
};
export default Testimonial;

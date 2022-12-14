import React from 'react';
import '@/styles/testimonial.css';
import clsx from 'clsx';
import TitlePage from '@/ui/titlePage';
import Testimonial1 from '@/ui/TestimonialCard';
import TestimonialCard from '@/ui/TestimonialCard';

type Props = {
  id: any;
  description: string;
  star: any;
};

const Data1 = [
  {
    id: 1,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'pruthvish',
    designation: 'developer',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
  {
    id: 1,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'pruthvish',
    designation: 'developer',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
  {
    id: 1,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'pruthvish',
    designation: 'developer',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
];

const Testimonial = ({
  className,
  id,
  description,
  star,
  neme,
  designation,
  url,
}: Props) => {
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
      />
      <div key={id} className="testimonialcard">
        {Data1.map((x) => (
          <TestimonialCard key={x.id} data={x} />
        ))}{' '}
      </div>
    </section>
  );
};
export default Testimonial;

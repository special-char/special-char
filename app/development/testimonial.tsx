import React from 'react';
import '@/styles/testimonial.css';
import clsx from 'clsx';
import TitlePage from '@/ui/titlePage';

import TestimonialCard from '@/ui/TestimonialCard';
import CarousalTestimonial from '@/ui/CarousalTestimonial';
import TestimonialBullets from '@/ui/TestimonialBullets';

type Props = {
  id: any;
  title: string;
  description: string;
  star: any;
};

const Data1 = [
  {
    id: 1,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Pruthvish',
    designation: 'Developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
  {
    id: 2,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Pruthvish',
    designation: 'Developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
  {
    id: 3,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Pruthvish',
    designation: 'Developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
  {
    id: 3,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'Pruthvish',
    designation: 'Developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
];

const Testimonial = ({ className, id }: Props) => {
  return (
    <section
      id={clsx('Testimonial', {
        [className]: !!className,
      })}
      className="testimonial lg:px-0 "
    >
      <TitlePage
        title="Our clients feedback is important for us."
        desc="Work With Us"
      />
      <div key={id} className="card-container">
        <CarousalTestimonial>
          {Data1.map((x) => (
            <TestimonialCard key={x.id} data={x} />
          ))}
        </CarousalTestimonial>
      </div>
    </section>
  );
};
export default Testimonial;

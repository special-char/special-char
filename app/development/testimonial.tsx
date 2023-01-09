import React from 'react';
import '@/styles/testimonial.css';
import clsx from 'clsx';
import TitlePage from '@/ui/titlePage';

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
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
  {
    id: 2,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'pruthvish',
    designation: 'developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
  {
    id: 3,
    description:
      '"The public is more fam, in effect, conditioned to prefer bad design, because that is what it lives with."',
    name: 'pruthvish',
    designation: 'developer',
    url: 'https://assets.website-files.com/6315d6de2357050021f26e96/6315d6de235705000ff26f3f_user-1.jpeg',
  },
];

const Testimonial = ({
  className,
  id,
}: // description,
// star,
// name,
// designation,
// url,
Props) => {
  return (
    <section
      id={clsx('Testimonial', {
        [className]: !!className,
      })}
      className="testimonial "
    >
      <TitlePage
        title="Our clients feedback is important for us."
        desc="Work With Us
"
      />
      <div key={id} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Data1.map((x) => (
          <TestimonialCard key={x.id} data={x} />
        ))}
      </div>
    </section>
  );
};
export default Testimonial;

import React from 'react';
import Rating from '@/ui/Rating';
import '@/styles/testimonial.css';
import ActionBar from './ActionBar';

export default function Testimonial1({ data1 }) {
  return (
    <section className="Testimonial">
      <div className="testimonial__paragraph">
        <Rating rate={4} />
        <p className="text-center">{data1.description}</p>
        <ActionBar />
      </div>
    </section>
  );
}

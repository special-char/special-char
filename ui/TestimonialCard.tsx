import React from 'react';
import Rating from '@/ui/Rating';
import '@/styles/testimonial.css';
// import ActionBar from './ActionBar';

export default function TestimonialCard({ data }) {
  return (
    <section className="testimonial__page">
      <div className="testimonial__paragraph ">
        <Rating rate={4} />
        <p className="text-center">{data.description}</p>
        {/* <ActionBar /> */}

        <div className="testimonial__actions flex items-center justify-center">
          <div className="testimonial__avatar placeholder w-12">
            <img src={data.url} alt={data.name} />
          </div>
          <div className="testimonial__demo ">
            <h3>{data.name}</h3>
            <span className="text-xl">{data.designation}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

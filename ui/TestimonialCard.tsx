import React from 'react';
import Rating from '@/ui/Rating';
import '@/styles/testimonialcard.css';

export default function TestimonialCard({ data }) {
  return (
    <section className="testimonialcard">
      <div className="testimonial__body ">
        <Rating rate={4} />
        <p className="text-center">{data.description}</p>

        <div className="testimonial__author ">
          <div className="placeholder">
            <img
              className="testimonial__avatar"
              src={data.url}
              alt={data.name}
            />
          </div>
          <div className="testimonial__demo">
            <h3>{data.name}</h3>
            <span className="text-xl">{data.designation}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

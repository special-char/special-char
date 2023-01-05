import React from 'react';
import '@/styles/contact.css';
import Title from './title';
import RoketSvg from '@/public/icons/roket.svg';
import ContactForm from './contact/contactForm';
type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'View all Work',
  title: 'Contact',
  description: "We'd love to hear from you.",
};

const Contact = ({ btn, description, title }: Props) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__title">
        <h1>{data.title}</h1>
        <div className="relative">
          <p>{data.description}</p>
          <button className="btn btn--primary">{data.btn}</button>
          <RoketSvg className="contact__tag" />
        </div>
      </div>
      {/* <ContactForm /> */}
    </section>
  );
};

export default Contact;

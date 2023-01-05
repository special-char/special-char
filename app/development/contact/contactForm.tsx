import React from 'react';

type Props = {};

const FormData = [
  {
    id: 'txtName',
    type: 'name',
    placeholder: 'Name*',
  },
  {
    id: 'txtName',
    type: 'company name',
    placeholder: 'Company Name',
  },
  {
    id: 'txtEmail',
    type: 'email',
    placeholder: 'Email*',
  },

  {
    id: 'txtPhone',
    type: 'tel',
    placeholder: '+91 1234 5678 90',
  },
  {
    id: 'txtWebsite URL',
    type: 'txtWebsite URL',
    placeholder: 'Website URL*',
  },
  {
    id: 'txtProject Details',
    type: 'textarea',
    placeholder: 'Project Details*',
  },
];

const ContactForm = (props: Props) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__body  lg:w-[60%] lg:mx-auto">
        {FormData.map((formData) => {
          return (
            <div className="form ">
              {formData.type === 'textarea' ? (
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder={formData.placeholder}
                  className="w-full  border border-secondary3 bg-neutral-400 px-4 py-2 hover:border-neutral-300 outline-neutral-300 focus:outline"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={formData.placeholder}
                  className="form__input rounded-none border border-secondary3 bg-neutral-400 hover:border-neutral-300 outline-neutral-300 focus:outline"
                />
              )}
            </div>
          );
        })}
        <button className="btn btn--primary ">send proposal</button>
      </div>
    </section>
  );
};

export default ContactForm;

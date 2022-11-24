import React from "react";
import "@/styles/contact.css";

type Props = {};

const FormData = [
  {
    id: "txtName",
    label: "Name",
    type: "name",
    placeholder: "Name*",
  },
  {
    id: "txtName",
    label: "Company Name",
    type: "company name",
    placeholder: "Company Name",
  },
  {
    id: "txtEmail",
    label: "Email",
    type: "email",
    placeholder: "Email*",
  },

  {
    id: "txtPhone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 1234 5678 90",
  },
  {
    id: "txtWebsite URL",
    label: "Website URL",
    type: "txtWebsite URL",
    placeholder: "Website URL*",
  },
  {
    id: "txtProject Details",
    label: "Project Details",
    type: "textarea",
    placeholder: "Project Details*",
  },
];

const Contact = (props: Props) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__body">
        {FormData.map((formData) => {
          return (
            <div className="form">
              <label className="form__label">{formData.label}</label>
              {formData.type === "textarea" ? (
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder={formData.placeholder}
                  className="w-full  bg-neutral-400 border border-secondary3 px-4 py-2 outline-neutral-400 focus:outline"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={formData.placeholder}
                  className="form__input rounded-none bg-neutral-400 border border-secondary3"
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

export default Contact;

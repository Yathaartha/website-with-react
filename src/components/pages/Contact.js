import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your Name",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your Email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Your Message..",
      },
    ],
  ],
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form
            id="contactForm"
            name="sentMessage"
            novalidate="novalidate"
            onSubmit={this.props.handleSubmit}
          >
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionIndex) => {
                console.log("Rendering section", sectionIndex, "with", section);
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          value={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Come on bro, your name is longer than that")
      .required("You must give us your name."),
    email: Yup.string()
      .email("You need to give us a valid email.")
      .required("We need your email."),
    phone: Yup.string()
      .min(10, "Come on, your phone number is surely longer")
      .max(15, "Come on, your phone number is surely shorter")
      .required("We need your phone number, bro."),
    message: Yup.string()
      .min(500, "You need to provide us more detailed information")
      .required("Please leave a message bro"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    alert("Your submitted the form", JSON.stringify(values));
  },
})(Contact);

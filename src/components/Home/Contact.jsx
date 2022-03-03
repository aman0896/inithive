import React from "react";
import FormikCompnent from "../Formik/FormikCompnent";
import FormikController from "../Formik/FormikController";
import { formValidation } from "../Formik/ValidationSchema";
import TextAreaComponent from "../InputComponent/TextAreaComponent";
import TextFieldInput from "../InputComponent/TextFieldInput";

const initialValues = {
  form_name: "",
  company_name: "",
  form_email: "",
  contact_number: "",
  form_message: "",
};

function Contact() {
  const handleSubmit = (values) => {
    console.log(values, "form-submit");
  };

  return (
    <section id="contact" class="section-padding">
      <div class="container">
        <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="contact-block">
              <div class="section-header text-center">
                <h2 class="section-title">Contact Us</h2>
                <p>
                  Please fill out the form below and one of our team will be in
                  touch with you in the near future.
                </p>
              </div>
              <FormikCompnent
                initialValues={initialValues}
                validationSchema={formValidation}
                onSubmit={handleSubmit}
              >
                <div class="row">
                  <div class="col-md-6">
                    <FormikController
                      label="Name"
                      type="text"
                      name="form_name"
                      placeholder="Type your name"
                      control="input"
                      after="*"
                    />
                  </div>
                  <div class="col-md-6">
                    <FormikController
                      name="company_name"
                      type="text"
                      label="Company Name"
                      control="input"
                      placeholder="Type your company name"
                      after="*"
                    />
                  </div>
                  <div class="col-md-6">
                    <FormikController
                      name="form_email"
                      type="email"
                      label="Email Address"
                      control="input"
                      placeholder="Type your email address"
                      after="*"
                    />
                  </div>
                  <div class="col-md-6">
                    <FormikController
                      name="contact_number"
                      label="Phone Number"
                      type="text"
                      control="input"
                      placeholder="Type your phone number"
                      after="*"
                    />
                  </div>
                  <div class="col-md-12">
                    <FormikController
                      name="form_message"
                      label="Tell us a bit about your needs"
                      after="*"
                      control="textarea"
                      placeholder="Your Message"
                    />
                    <FormikController
                      control="submit"
                      label="Send Message"
                      type="submit"
                    />
                  </div>
                </div>
              </FormikCompnent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

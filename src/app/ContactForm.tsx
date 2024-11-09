import React, { useState /*, useRef */ } from "react";
// import axios from "axios";

import { Button } from "@/components/Button";

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = (props, ref) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const [showSuccessMsg /*, setShowSuccessMsg */] = useState(false);
  const [showFailureMsg /*, setShowFailureMsg */] = useState(false);

  const isFormValid = () => {
    const hasError = false;

    /*
	TODO: This should all be using React state, as controlled components

	  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Name
    if (nameInputRef.current.value.length === 0) {
      setNameError(true);
      hasError = true;
    }

    // Email
    if (
      emailInputRef.current.value.length === 0 &&
      emailRegExp.test(emailInputRef.current.value)
    ) {
      setEmailError(true);
      hasError = true;
    }

    // Message
    if (messageInputRef.current.value.length === 0) {
      setMsgError(true);
      hasError = true;
    }
	*/

    return !hasError;
  };

  const onChangeHandlerName = (event: React.FormEvent) => {
    event.preventDefault();
    setNameError(false);
  };

  const onChangeHandlerEmail = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError(false);
  };

  const onChangeHandlerMsg = (event: React.FormEvent) => {
    event.preventDefault();
    setMsgError(false);
  };

  const contactFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      /* TODO: This should be validating against React state */
      /*
		const bodyFormData = new FormData();
  
      axios({
        method: "post",
		// TODO: Create a submission endpoint using nextJS to handle form mailer. This php endpoint no longer exists
        url: "http://rileyboyd.com/contact.php",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          if (response.data.type == "success") {
            setShowSuccessMsg(true);
          }
        })
        .catch(function (response) {
          //handle error
          setShowFailureMsg(true);
        });
		*/
    }
  };

  return (
    <div className="container" id="contact" ref={ref}>
      <div className="rb-gap-5 d-none d-md-block" />
      <div className="rb-gap-3 d-md-none" />
      <div className="row vertical-gap">
        <div className="col-lg-5">
          <h2 className="display-4">Contact Me</h2>
          <div className="rb-gap mnt-3" />
          <p>Get in touch! Use this form to send me an email.</p>
        </div>
        <div className="col-lg-7">
          {/* START: Form */}
          <form
            className="rb-form rb-form-ajax"
            onSubmit={contactFormSubmitHandler}
          >
            <div className="row vertical-gap">
              <div className="col-md-6">
                <input
                  type="text"
                  className={`form-control required ${
                    nameError ? "rb-error" : ""
                  }`}
                  name="name"
                  placeholder="Your Name"
                  onChange={onChangeHandlerName}
                />
                <div
                  id="name-error"
                  className="rb-error"
                  style={{ display: nameError ? "block" : "none" }}
                >
                  This field is required.
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className={`form-control required ${
                    emailError ? "rb-error" : ""
                  }`}
                  name="email"
                  placeholder="Your Email"
                  onChange={onChangeHandlerEmail}
                />
                <div
                  id="email-error"
                  className="rb-error"
                  style={{ display: emailError ? "block" : "none" }}
                >
                  Please enter a valid email address.
                </div>
              </div>
            </div>
            <div className="rb-gap-1" />
            <textarea
              className={`form-control required ${msgError ? "rb-error" : ""}`}
              name="message"
              rows={8}
              placeholder="Your Comment"
              aria-required="true"
              defaultValue={""}
              onChange={onChangeHandlerMsg}
            />
            <div
              id="name-error"
              className="rb-error"
              style={{ display: msgError ? "block" : "none" }}
            >
              This field is required.
            </div>
            <div className="rb-gap-1" />
            <Button type="submit">Send Message</Button>
            <div
              className="rb-form-response rb-form-response-success"
              style={{ display: showSuccessMsg ? "block" : "none" }}
            >
              Message sent!
            </div>
            <div
              className="rb-form-response rb-form-response-error"
              style={{ display: showFailureMsg ? "block" : "none" }}
            >
              Oops, something went wrong. Message not sent.
            </div>
            <div className="clear" />
          </form>
        </div>
      </div>
      <div className="rb-gap-5" />
    </div>
  );
};

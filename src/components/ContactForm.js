import React, {useState,useRef,forwardRef} from 'react';

import axios from 'axios';

let ContactForm = (props,ref) => {

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const titleInputRef = useRef();
	const messageInputRef = useRef();
	const successMsgRef = useRef();

	const [nameError,setNameError] = useState(false);
	const [emailError,setEmailError] = useState(false);
	const [msgError,setMsgError] = useState(false);

	const [showSuccessMsg, setShowSuccessMsg] = useState(false);
	const [showFailureMsg, setShowFailureMsg] = useState(false);


	const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	// const contactRef = useRef();

	const validateForm = () => {
		
		let hasError = false;

		// Name
		
		if (nameInputRef.current.value.length === 0) {
			setNameError(true);
			hasError = true;
		}

		// Email
		if (emailInputRef.current.value.length === 0 && emailRegExp.test(emailInputRef.current.value)) {
			setEmailError(true);
			hasError = true;
		}

		// Message
		if (messageInputRef.current.value.length === 0) {
			setMsgError(true);
			hasError = true;
		}

		if (hasError) {
			return false;
		} else {
			return true;
		}

	}

	const onChangeHandlerName = (event) => {
		event.preventDefault();
		setNameError(false);

	}

	const onChangeHandlerEmail= (event) => {
		event.preventDefault();
		setEmailError(false);

	}


	const onChangeHandlerMsg = (event) => {
		event.preventDefault();
		setMsgError(false);

	}

	const contactFormSubmitHandler = (event) => {

		event.preventDefault();

		if (validateForm()) {
			
			let bodyFormData = new FormData();

			bodyFormData.set('name', nameInputRef.current.value);

			bodyFormData.set('email', emailInputRef.current.value);

			bodyFormData.set('title', 'title');

			bodyFormData.set('message', messageInputRef.current.value);

			axios({
			    method: 'post',
			    url: 'http://rileyboyd.com/contact.php',
			    data: bodyFormData,
			    headers: {'Content-Type': 'multipart/form-data' }
			})
			.then(function (response) {
		        //handle success
		        if (response.data.type == "success") {
			        successMsgRef.current.innerHTML = response.data.response;
			        setShowSuccessMsg(true);
		        }

		    })
		    .catch(function (response) {
	        //handle error
	        	setShowFailureMsg(true);
	        });

		}
	} 

	return(
      <div className="container" id="contact" ref={ref}>
        <div className="rb-gap-5 d-none d-md-block" />
        <div className="rb-gap-3 d-md-none" />
        <div className="row vertical-gap">
          <div className="col-lg-5">
            <h2 className="display-4">Contact Me</h2>
            <div className="rb-gap mnt-3" />
            <p>Get in touch! Use this form to send me an email.</p>
            {/*
            <ul className="rb-contact-info">
              <li><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
              <li><strong>Phone:</strong> +44 987 065 908</li>
              <li><strong>Email:</strong> info@Example.com</li>
              <li><strong>Fax:</strong> +44 987 065 909</li>
            </ul>
           */}
          </div>
          <div className="col-lg-7">
            {/* START: Form */}
            <form className="rb-form rb-form-ajax" onSubmit={contactFormSubmitHandler}>
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <input type="text" className={`form-control required ${nameError ? 'rb-error': ''}`} name="name" placeholder="Your Name" ref={nameInputRef} onChange={onChangeHandlerName} />
                  <div id="name-error" className="rb-error" style={{ display: nameError ? 'block': 'none'}}>This field is required.</div>
                </div>
                <div className="col-md-6">
                  <input type="email" className={`form-control required ${emailError ? 'rb-error': ''}`} name="email" placeholder="Your Email" ref={emailInputRef} onChange={onChangeHandlerEmail} />
                  <div id="email-error" className="rb-error" style={{ display: emailError ? 'block': 'none'}}>Please enter a valid email address.</div>
                </div>
              </div>
              <div className="rb-gap-1" />
              <textarea className={`form-control required ${msgError ? 'rb-error': ''}`} name="message" rows={8} placeholder="Your Comment" aria-required="true" defaultValue={""} ref={messageInputRef} onChange={onChangeHandlerMsg} />
              <div id="name-error" className="rb-error" style={{ display: msgError ? 'block': 'none'}}>This field is required.</div>
              <div className="rb-gap-1" />
              <button className="rb-btn" id="form-submit-btn">Send Message</button>
              <div className="rb-form-response rb-form-response-success" style={{display : showSuccessMsg ? 'block':'none'}} ref={successMsgRef}>Message sent!</div>
              <div className="rb-form-response rb-form-response-error" style={{display : showFailureMsg ? 'block':'none'}}>Oops, something went wrong. Message not sent.</div>
              <div className="clear" />
            </form>
          </div>
        </div>
        <div className="rb-gap-5" />
      </div>
	);

}

ContactForm = forwardRef(ContactForm);

export default ContactForm;
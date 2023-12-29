import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/signin"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase contactus">Join Now</h2>
          <h3 className="section-subheading text-muted">
            Ready for a stylish adventure? Create your account now and join our friendly fashion community!
          </h3>
        </div>
        {/* <!-- * * * * * * * * * * * * * * *-->
        <!-- * * SB Forms Contact Form * *-->
        <!-- * * * * * * * * * * * * * * *-->
        <!-- This form is pre-integrated with SB Forms.-->
        <!-- To make this form functional, sign up at-->
        <!-- https://startbootstrap.com/solution/contact-forms-->
        <!-- to get an API token!--> */}
        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-3">
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- Name input--> */}
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your First Name *"
                  data-sb-validations="required"
                  name="name"
                />
                <div className="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div className="form-group ">
                {/* <!-- Phone number input--> */}
                <input
                  className="form-control"
                  id="phone"
                  type="text"
                  placeholder="Your Last Name *"
                  data-sb-validations="required"
                  name="last-name"
                />
                <div className="invalid-feedback" data-sb-feedback="phone:required">
                  A last name is required.
                </div>
              </div>
              <div className="form-group mb-md-0">
                {/* <!-- Email address input--> */}
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  name="email"
                  data-sb-validations="required,email"
                />
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div className="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Bio *"
                  data-sb-validations="required"
                  name="bio"
                ></textarea>
                <div className="invalid-feedback" data-sb-feedback="message:required">
                  A bio is required.
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <input
                  className="form-control"
                  id="message"
                  placeholder="Password *"
                  data-sb-validations="required"
                  name="password"
                  type="password"
                ></input>
                <div className="invalid-feedback" data-sb-feedback="message:required">
                  A password is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <input
                  className="form-control"
                  id="message"
                  placeholder="Password Confirmation *"
                  data-sb-validations="required"
                  name="password_confirmation"
                  type="password"
                ></input>
                <div className="invalid-feedback" data-sb-feedback="message:required">
                  A password Confirmation is required.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Submit success message-->
            <!---->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted--> */}
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          {/* <!-- Submit error message-->
            <!---->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form--> */}
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
          </div>
          {/* <!-- Submit Button--> */}
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;

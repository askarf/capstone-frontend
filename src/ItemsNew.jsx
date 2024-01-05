import React, { useState } from "react";
import axios from "axios";

export function ItemsNew() {
  const userID = localStorage.getItem("currentUser");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/items.json", params)
      .then((response) => {
        event.target.reset();
        window.location.href = `/userProfile/${userID}`;
      })
      .catch((error) => {
        setError(error.response.data.errors.join(", "));
      });
  };
  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <div className="mb-5">
      <h1>New Item</h1>
      {error && (
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={closeErrorPopup}>Close</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-5">
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center ">
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
                      placeholder="Name of Item *"
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
                      placeholder="Image *"
                      data-sb-validations="required"
                      name="image"
                    />
                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                      An image is required.
                    </div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* <!-- Email address input--> */}
                    <input
                      className="form-control"
                      id="size"
                      type="text"
                      placeholder="Size *"
                      name="size"
                      data-sb-validations="required,email"
                    />
                    <div className="invalid-feedback" data-sb-feedback="email:required">
                      A size is required.
                    </div>
                    <input
                      className="form-control mt-3"
                      id="condition"
                      type="text"
                      placeholder="Condition *"
                      name="condition"
                      data-sb-validations="required,email"
                    />
                    <div className="invalid-feedback" data-sb-feedback="email:required">
                      A condition is required.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* <!-- Message input--> */}
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="Description *"
                      data-sb-validations="required"
                      name="description"
                    ></textarea>
                    <div className="invalid-feedback" data-sb-feedback="message:required">
                      A description is required.
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
                      placeholder="Retail Price *"
                      data-sb-validations="required"
                      name="retail_price"
                      type="text"
                    ></input>
                    <div className="invalid-feedback" data-sb-feedback="message:required">
                      A retail price is required.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* <!-- Message input--> */}
                    <input
                      className="form-control"
                      id="message"
                      placeholder="Selling Price *"
                      data-sb-validations="required"
                      name="selling_price"
                      type="text"
                    ></input>
                    <div className="invalid-feedback" data-sb-feedback="message:required">
                      A selling price is required.
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
                  Post Item
                </button>
              </div>
            </form>
          </div>
        </section>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          size: <input name="size" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <div>
          condition: <input name="condition" type="text" />
        </div>
        <div>
          retail price: <input name="retail_price" type="text" />
        </div>
        <div>
          selling price: <input name="selling_price" type="text" />
        </div>

        <button type="submit">Create item</button>
      </form>
    </div>
  );
}

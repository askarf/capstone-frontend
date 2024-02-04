import React, { useState } from "react";
import axios from "axios";

export function ItemsNew() {
  const userID = localStorage.getItem("currentUser");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/items.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = `/userProfile/${userID}`;
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors || ["An error occurred."]);
      });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center ">
          <h2 className="section-heading text-uppercase contactus newitem">New Item</h2>
          <h3 className="section-subheading text-muted">
            Transform your closet treasures into opportunities, sell your pre-loved items and spread the joy of
            discovery to someone new!
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
                  placeholder="Size *"
                  data-sb-validations="required"
                  name="size"
                />
                <div className="invalid-feedback" data-sb-feedback="phone:required">
                  A size is required.
                </div>
              </div>
              <div className="form-group mb-md-0">
                {/* <!-- Email address input--> */}
                <input
                  className="form-control"
                  id="email"
                  type="text"
                  placeholder="Condition *"
                  name="condition"
                  data-sb-validations="required"
                />
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An condition is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <textarea
                  className="form-control"
                  id="message"
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
          <h3 className="newitem section-subheading">Only one image is required per item:</h3>
          <div className="">
            <div className="form-group">
              {/* <!-- Name input--> */}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Image Url 1 *"
                data-sb-validations=""
                name="url1"
              />
            </div>
            <div className="form-group">
              {/* <!-- Name input--> */}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Image Url 2 *"
                data-sb-validations=""
                name="url2"
              />
            </div>
            <div className="form-group">
              {/* <!-- Name input--> */}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Image Url 3 *"
                data-sb-validations=""
                name="url3"
              />
            </div>
            <div className="form-group">
              {/* <!-- Name input--> */}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Image Url 4 *"
                data-sb-validations=""
                name="url4"
              />
            </div>
            <div className="form-group">
              {/* <!-- Name input--> */}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Image Url 5 *"
                data-sb-validations=""
                name="url5"
              />
            </div>
          </div>

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
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
          </div>
          <div className="text-center text-danger mb-3">
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase mb-5" id="submitButton" type="submit">
              Post New Item
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

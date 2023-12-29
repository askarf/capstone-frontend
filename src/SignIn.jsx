import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function SignIn() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);

        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("currentUser", response.data.user_id);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Sign In</h2>
              <h3 className="section-subheading text-muted">
                Welcome back! Sign in to continue your stylish journey with us. Your curated wardrobe and fashion
                favorites are just a click away.
              </h3>
            </div>

            <form id="contactForm signup" onSubmit={handleSubmit}>
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <!-- Email address input--> */}
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email *"
                      data-sb-validations="required,email"
                      name="email"
                    />
                    <div className="invalid-feedback">An email is required.</div>
                    <div className="invalid-feedback">Email is not valid.</div>
                  </div>

                  <div className="form-group">
                    {/* <!-- password input--> */}
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Your Password *"
                      data-sb-validations="required"
                      name="password"
                    />
                    <div className="invalid-feedback">A password is required.</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary btn-xl text-uppercase" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;

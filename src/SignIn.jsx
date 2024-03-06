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
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("currentUser", response.data.user_id);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <section className="page-section singin" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase contactus">Sign In</h2>
          <h3 className="section-subheading text-muted">
            Welcome back! Sign in to continue your stylish journey with us. Your curated wardrobe and fashion favorites
            are just a click away.
          </h3>
        </div>

        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit} className="py-4 my-5">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <input
                  className="form-control"
                  id="email"
                  placeholder="Email *"
                  data-sb-validations="required"
                  name="email"
                  type="email"
                ></input>
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
              </div>
            </div>
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
          </div>

          {/* <!-- Submit Button--> */}
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
              Sign In
            </button>
          </div>
          <div className="container pt-3">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <a href="http://localhost:5173/signup">Create a new account</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;

import { Link } from "react-router-dom";

export function Header() {
  const userId = [localStorage.getItem("currentUser")];
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            {/* <img src="assets/img/navbar-logo.svg" alt="..." /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Acount
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Sellers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {localStorage.jwt === undefined ? (
        <div>
          <Link to={`/signup`}>Sign Up</Link> | <Link to={`/signin`}>Sign In</Link> | <Link to={"/"}>Home</Link>
        </div>
      ) : (
        <div>
          <Link to={`/logout`}>Log Out</Link> | <Link to={`/userprofile/${userId}`}>Your Closet</Link> |{" "}
          <Link to={"/"}>Home</Link>
        </div>
      )}
    </div>
  );
}

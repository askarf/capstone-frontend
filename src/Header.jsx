import { Link } from "react-router-dom";
import axios from "axios";

export function Header() {
  const userId = [localStorage.getItem("currentUser")];
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav className="navbar  navbar-dark navbar-expand-lg fixed-top" id="mainNav">
        <a className="navbar-brand" href="#page-top">
          <img src="/src/img/logos/logo.png" className="h-10 px-5" alt="logo" />
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
          {localStorage.jwt === undefined ? (
            <ul className="navbar-nav text-uppercase ms-auto py-4 px-5 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/acount">
                  Acount
                </a>
              </li>

              <li className="nav-item">
                <Link to={`/`} className="nav-link ">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/users">
                  Sellers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav text-uppercase ms-auto py-4 px-5 py-lg-0">
              <li className="nav-item">
                <Link to={`/userprofile/${userId}`} className="nav-link">
                  My Closet
                </Link>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link" onClick={handleClick}>
                  Logout
                </a>
              </li>

              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/users">
                  Sellers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Acount() {
  return (
    <section className="page-section" id="acount">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Acount</h2>
          <h3 className="section-subheading text-muted">
            Style Revived, Wallet Thrived: Your Wardrobe's Second Act Starts Here!
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <a href="/">
              <h4 id="" className="my-3 circlelink">
                Start Shopping
              </h4>
            </a>
            <p className="text-muted">
              Explore the charm of our store as our guest—feel free to browse and discover hidden treasures before you
              commit. Click 'Start Shopping' to embark on a delightful journey through our curated collections. No
              strings attached, just pure fashion exploration at your fingertips. Happy browsing!
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <Link to={`/signin`}>
              <h4 id="" className="my-3 circlelink">
                Sign In
              </h4>
            </Link>
            <p className="text-muted">
              Welcome Home! Your return is a heartfelt 'thank you' for making our consignment family complete. Step into
              the familiar warmth of homey fashion connections by logging in. Your journey continues, and we're grateful
              to share it with you!{" "}
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <Link to={`/signup`}>
              <h4 id="" className="my-3 circlelink">
                Join Now
              </h4>
            </Link>
            <p className="text-muted">
              Elevate your style and savings by signing up for our consignment shop! Join a community that values
              sustainability and smart shopping. Discover unique pieces at unbeatable prices, while also earning from
              your gently loved items. Say hello to a refreshed wardrobe and exclusive perks. Sign up now for a
              fashion-forward experience!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

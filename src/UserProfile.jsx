/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { ItemsNew } from "./ItemsNew";

export function UserProfile(props) {
  const userId = localStorage.getItem("currentUser");
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchData = async () => {
      try {
        // Assuming you have an API endpoint to fetch user data by ID
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const userData = await response.json();
        setCurUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [userId]);

  if (!curUser) {
    // Data is still being fetched, or an error occurred
    return (
      <div>
        <p>Loading...</p> {/* Or display an error message */}
      </div>
    );
  }

  return (
    <div>
      <div className="pt-5">
        {/* <!-- Masthead--> */}
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading"></div>
            <div className="masthead-heading text-uppercase">{curUser.name}s closet</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#ItemsNew">
              Add New Item
            </a>
          </div>
        </header>
        <div className="" id="index">
          <section className="page-section bg-light" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Personal Information</h2>
                <h4 className="section-heading text-uppercase">
                  {curUser.name} {curUser.last_name}
                </h4>
                <h3 className="section-subheading text-muted">{curUser.about}</h3>

                <a
                  type="button"
                  onClick={() => props.onUserShow(curUser)}
                  className="btn btn-primary btn-l text-uppercase mb-5"
                >
                  Edit
                </a>
              </div>
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Your Closet</h2>
                <h3 className="section-subheading text-muted"></h3>
              </div>
              <div className="row">
                {/* <!-- Portfolio item 1--> */}
                {props.items
                  .filter((item) => item.user_id.toString() == curUser.id)
                  .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                  .map((item) => (
                    <div key={item.id} className="col-lg-4 col-sm-6 mb-4">
                      <div className="portfolio-item">
                        <a type="button" onClick={() => props.onItemShow(item)} className="portfolio-link">
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <h3>EDIT</h3>
                            </div>
                          </div>
                          <img
                            className="img-fluid custom-height "
                            src={item.images[0].url}
                            alt="..."
                            style={{ objectFit: "cover", height: "500px" }}
                          />
                        </a>
                        <div className="portfolio-caption">
                          <div className="long">
                            <div className="portfolio-caption-heading">{item.name}</div>
                            <div className="portfolio-caption-subheading text-muted">
                              <strong>Size:</strong> {item.size}
                            </div>
                            <div className="portfolio-caption-subheading text-muted">
                              <strong>Condition:</strong> {item.condition}
                            </div>
                            <div className="portfolio-caption-subheading text-muted">
                              <strong>Retail Price:</strong> {item.retail_price}
                            </div>
                            <div className="portfolio-caption-subheading text-muted">
                              <strong>Selling Price:</strong> ${item.selling_price}
                            </div>
                            <div className="portfolio-caption-subheading text-muted max-height-100 overflow-auto">
                              <strong>Description:</strong> {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <div id="account"></div>
      </div>
      <div id="ItemsNew">
        <ItemsNew />
      </div>
    </div>
  );
}

export default UserProfile;

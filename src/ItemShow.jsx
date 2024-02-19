/* eslint-disable react/prop-types */

import { useParams, Link, useNavigate } from "react-router-dom";
import { LoveButton } from "./LoveButton";

function ItemShow(props) {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const selectedItem = props.items.find((item) => item.id.toString() === itemId);

  if (!selectedItem) {
    return (
      <div>
        <h1>Item not found</h1>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="portfolio-modal" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project details--> */}
                  <h2 className="text-uppercase">{selectedItem.name}</h2>
                  <p className="item-intro text-muted">
                    Size: {selectedItem.size} | Condition: {selectedItem.condition}
                  </p>
                  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {selectedItem.images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                          <img
                            className="img-fluid d-block mx-auto custom-height"
                            src={image.url}
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  <p>{selectedItem.description}</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Retail Price:</strong> ${selectedItem.retail_price}
                    </li>
                    <li>
                      <strong>Selling Price:</strong> ${selectedItem.selling_price}
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-l text-uppercase mb-2"
                    type="button"
                    href={`/users/${selectedItem.user.id}`}
                  >
                    Seller: {selectedItem.user.name} {selectedItem.user.last_name}
                  </a>
                  <div></div>
                  <button
                    className="btn btn-primary btn-l text-uppercase "
                    type="button"
                    href="#"
                    onClick={handleGoBack}
                  >
                    Go Back
                  </button>

                  <LoveButton selectedItem={selectedItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemShow;

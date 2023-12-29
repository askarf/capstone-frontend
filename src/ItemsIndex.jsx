/* eslint-disable react/prop-types */

export function ItemsIndex(props) {
  return (
    <div className="pt-5">
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Shop!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#index">
            Start Shopping
          </a>
        </div>
      </header>
      <div className="" id="index">
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">The Closet</h2>
              <h3 className="section-subheading text-muted">
                Our consignment store has tons of treasures waiting to be discovered.
              </h3>
            </div>
            <div className="row">
              {/* <!-- Portfolio item 1--> */}
              {props.items.map((item) => (
                <div key={item.id} className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                    <a href={`http://localhost:5173/items/${item.id}`} className="portfolio-link">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img
                        className="img-fluid custom-height "
                        src={item.image}
                        alt="..."
                        style={{ objectFit: "cover", height: "500px" }}
                      />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">{item.name}</div>
                      <div className="portfolio-caption-subheading text-muted">Size: {item.size}</div>
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
  );
}

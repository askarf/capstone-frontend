export function UserIndex(props) {
  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Consigners</h2>
            <h3 className="section-subheading text-muted">
              The heart of our community, and we love each one for bringing their unique style to our shared fashion
              story.
            </h3>
          </div>
          <div className="row">
            {props.users.map((user) => (
              <div key={user.id} className="col-lg-4 col-sm-6 mb-4 portfolio-item">
                <div className="">
                  <div className="team-member">
                    <a href={`http://localhost:5173/user/${user.id}`} className="portfolio-link">
                      <div className="portfolio-hover-circle">
                        <div className="portfolio-hover-content">
                          <h2 className="">VEIW</h2>
                        </div>
                      </div>
                      <img
                        className="img-fluid mx-auto rounded-circle"
                        src={user.image}
                        alt="..."
                        style={{ objectFit: "cover" }}
                      />
                    </a>

                    <h4>{user.name}</h4>

                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";

export function UserShow(props) {
  const { userId } = useParams();
  const selectedUser = props.users.find((user) => user.id.toString() === userId);
  const navigate = useNavigate();

  if (!selectedUser) {
    return (
      <div className="modal-dialog pt-5">
        <div className="modal-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">User Not Found</h2>

                  <a className="btn btn-primary btn-l text-uppercase" type="button" href="/">
                    Go Back Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="modal-dialog pt-5">
        <div className="modal-content">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-lg-8 pb-5">
                <div className="modal-body">
                  <img className="mx-auto rounded-circle custom-height-two pb-3" src={selectedUser.image} alt="..." />
                  <h2 className="text-uppercase">
                    {selectedUser.name} {selectedUser.last_name}
                  </h2>
                  <p className="item-intro text-muted">{selectedUser.about}</p>
                  <div></div>
                  <button className="btn btn-primary btn-xl text-uppercase" onClick={handleGoBack} type="button">
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserShow;

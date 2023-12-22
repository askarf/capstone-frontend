/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";

export function UserShow(props) {
  const { userId } = useParams();
  const selectedUser = props.users.find((user) => user.id.toString() === userId);
  const navigate = useNavigate();

  if (!selectedUser) {
    return (
      <div>
        <h1>Userrrr not found</h1>
      </div>
    );
  }
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>User Show</h1>
      <h2>name: {selectedUser.name}</h2>
      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
  );
}

export default UserShow;

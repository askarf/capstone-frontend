import { useParams } from "react-router-dom";

export function UserShow(props) {
  const { userId } = useParams();
  const selectedUser = props.users.find((user) => user.id.toString() === userId);

  if (!selectedUser) {
    return (
      <div>
        <h1>Userrrr not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>User Show</h1>
      <h2>name: {selectedUser.name}</h2>
    </div>
  );
}

export default UserShow;

export function UserProfileShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params, () => event.target.reset());
  };

  // const handleClick = () => {
  //   props.onDestroyUser(props.user);
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.user.name} name="name" type="text" />
        </div>

        <div>
          Image: <input defaultValue={props.user.image} name="image" type="text" />
        </div>

        <button type="submit">Update</button>
      </form>
      {/* <button onClick={handleClick}>Delete User</button> */}
    </div>
  );
}

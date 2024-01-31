/* eslint-disable react/prop-types */
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
          Last Name: <input defaultValue={props.user.last_name} name="last_name" type="text" />
        </div>

        <div>
          Image: <input defaultValue={props.user.image} name="image" type="text" />
        </div>
        <div>
          About: <textarea defaultValue={props.user.about} name="about" type="text" className="pt-2" />
        </div>

        <button type="submit">Update</button>
      </form>
      {/* <button onClick={handleClick}>Delete User</button> */}
    </div>
  );
}

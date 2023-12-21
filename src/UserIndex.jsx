export function UserIndex(props) {
  return (
    <div>
      <h1>User index</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <h2>{user.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

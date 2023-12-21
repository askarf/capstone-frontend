export function ItemsIndex(props) {
  return (
    <div>
      <h1>Items index</h1>
      {props.items.map((item) => (
        <div key={item.id}>
          <div>
            <h2>{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

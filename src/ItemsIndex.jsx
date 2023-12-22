/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ItemsIndex(props) {
  return (
    <div>
      <h1>Items index</h1>
      {props.items.map((item) => (
        <div key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
            <Link to={`/items/${item.id}`}>View Item</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

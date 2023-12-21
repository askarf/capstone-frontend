import { useParams } from "react-router-dom";

function ItemShow(props) {
  const { itemId } = useParams();
  const selectedItem = props.items.find((item) => item.id.toString() === itemId);

  if (!selectedItem) {
    return (
      <div>
        <h1>Item not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>name: {selectedItem.name}</h1>
      <p>description: {selectedItem.description}</p>
      <p>price: {selectedItem.price}</p>
      <p>
        seller: {selectedItem.user.name} {selectedItem.user.last_name}
      </p>
    </div>
  );
}

export default ItemShow;

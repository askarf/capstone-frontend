/* eslint-disable react/prop-types */
import axios from "axios";

export function LoveButton({ selectedItem }) {
  const handleLoveItem = () => {
    const itemId = selectedItem.id;
    axios
      .post(`http://localhost:3000/users_loved_items.json`, { item_id: itemId })
      .then((response) => {
        console.log("item loved");
      })
      .catch((error) => {
        console.error("Error loving item:", error);
      });
    window.location.reload();
  };

  return (
    <div className="container p-5">
      <button className="btn btn-primary btn-l text-uppercase " type="button" href="#" onClick={handleLoveItem}>
        Love Item
      </button>
    </div>
  );
}

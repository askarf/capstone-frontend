import React, { useState, useEffect } from "react";
import axios from "axios";

export function LoveButton({ selectedItem }) {
  const userId = [localStorage.getItem("currentUser")];
  const [isLoved, setIsLoved] = useState(false);
  useEffect(() => {
    checkIsItemLoved();
  }, [selectedItem]);

  const checkIsItemLoved = () => {
    axios.get(`http://localhost:3000/users_loved_items.json`).then((response) => {
      const itemLoved = response.data.find(
        (lovedItem) => lovedItem.user_id == userId && lovedItem.item_id == selectedItem.id
      );

      if (itemLoved) {
        setIsLoved(true);
      } else {
        setIsLoved(false);
      }
    });
  };

  const handleLoveItem = () => {
    const itemId = selectedItem.id;
    axios
      .post(`http://localhost:3000/users_loved_items.json`, { item_id: itemId })
      .then((response) => {
        console.log("item loved");
      })
      .catch((error) => {
        console.error("Error loving item:", error);
        console.log({ itemId: itemId });
        console.log({ itemId: selectedItem.id });
      });
    setIsLoved(true);
    window.location.reload();
  };

  return (
    <div className="container p-5">
      <button className="btn btn-primary btn-l text-uppercase " type="button" href="#" onClick={handleLoveItem}>
        {isLoved ? "LOVED" : "Love Item"}
      </button>
    </div>
  );
}

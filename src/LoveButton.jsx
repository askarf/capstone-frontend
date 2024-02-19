import React, { useState, useEffect } from "react";
import axios from "axios";

export function LoveButton({ selectedItem }) {
  const userId = localStorage.getItem("currentUser");
  const [isLoved, setIsLoved] = useState(false);
  const [usersLovedItems, setUsersLovedItems] = useState([]);

  useEffect(() => {
    checkIsItemLoved();
  }, [selectedItem]);

  useEffect(() => {
    handleIndexUsersLovedItems();
  }, []);

  const checkIsItemLoved = () => {
    axios
      .get(`http://localhost:3000/users_loved_items.json`)
      .then((response) => {
        const itemLoved = response.data.find(
          (lovedItem) => lovedItem.user_id == userId && lovedItem.item_id == selectedItem.id
        );
        setIsLoved(!!itemLoved);
      })
      .catch((error) => {
        console.error("Error fetching loved items:", error);
      });
  };

  const handleIndexUsersLovedItems = () => {
    axios
      .get("http://localhost:3000/users_loved_items.json")
      .then((response) => {
        setUsersLovedItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users' loved items:", error);
      });
  };

  const handleLoveButtonClick = () => {
    if (isLoved) {
      handleDestroyLovedItem();
    } else {
      handleLoveItem();
    }
  };

  const handleDestroyLovedItem = () => {
    const curLovedItem = usersLovedItems.find(
      (lovedItem) => lovedItem.user_id == userId && lovedItem.item_id == selectedItem.id
    );
    if (!curLovedItem) {
      console.error("No loved item found to unlove");

      return;
    }
    axios
      .delete(`http://localhost:3000/users_loved_items/${curLovedItem.id}.json`)
      .then((response) => {
        console.log("Item unloved");
        setIsLoved(false);
      })
      .catch((error) => {
        console.error("Error unloving item:", error);
      });
    window.location.reload();
  };

  const handleLoveItem = () => {
    const itemId = selectedItem.id;
    axios
      .post(`http://localhost:3000/users_loved_items.json`, { item_id: itemId })
      .then((response) => {
        console.log("Item loved");
        setIsLoved(true);
      })
      .catch((error) => {
        console.error("Error loving item:", error);
      });
    window.location.reload();
  };

  return (
    <div className="container p-5">
      <button className="btn btn-primary btn-l text-uppercase" type="button" onClick={handleLoveButtonClick}>
        {isLoved ? "Unlove" : "Love Item"}
      </button>
    </div>
  );
}

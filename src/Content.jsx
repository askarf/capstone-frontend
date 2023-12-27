import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ItemsIndex } from "./ItemsIndex";
import ItemShow from "./ItemShow";
import { UserIndex } from "./UserIndex";
import UserShow from "./UserShow";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserProfile from "./UserProfile";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";

export function Content() {
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  const handleShowItem = (item) => {
    setIsItemsShowVisible(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setIsItemsShowVisible(false);
  };

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };
  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(() => {
    handleIndexItems();
  }, []);
  useEffect(() => {
    handleIndexUsers();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemsIndex items={items} />} />
        <Route path="/items/:itemId" element={<ItemShow items={items} />} />

        <Route path="/users" element={<UserIndex users={users} />} />
        <Route path="/users/:userId" element={<UserShow users={users} />} />
        <Route path="/user/:userId" element={<UserShow users={users} />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/logout" element={<LogoutLink />} />

        <Route
          path="/userprofile/:userId"
          element={<UserProfile users={users} items={items} onItemShow={handleShowItem} />}
        />
      </Routes>

      <Modal show={isItemsShowVisible} onClose={handleClose}>
        <form action="">
          <h1>{currentItem.name}</h1>
          <p>{currentItem.description}</p>
          <p>{currentItem.size}</p>
          <p>{currentItem.image}</p>
          <p>{currentItem.condition}</p>
          <p>{currentItem.retail_price}</p>
          <p>{currentItem.selling_price}</p>
          <button>Update</button>
        </form>
      </Modal>
    </div>
  );
}

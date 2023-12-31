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
import { UserItemShow } from "./UserItemShow";
import { Acount } from "./Acount";

export function Content() {
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  const handleShowItem = (item) => {
    setIsItemsShowVisible(true);
    setCurrentItem(item);
  };

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      setItems(response.data);
    });
  };
  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  const handleUpdateItem = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/items/${id}.json`, params).then((response) => {
      setItems(
        items.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          } else {
            return item;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };
  const handleUpdateUser = (id, params, successCallback) => {
    console.log("handleUpdateUser", params);
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(
        users.map((user) => {
          if (user.id === response.data.id) {
            return response.data;
          } else {
            return user;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    setIsItemsShowVisible(false);
  };

  const handleDestroyItem = (item) => {
    axios.delete(`http://localhost:3000/items/${item.id}.json`).then((response) => {
      setItems(items.filter((i) => i.id !== item.id));
      handleClose();
    });
  };

  useEffect(() => {
    handleIndexItems();
  }, []);
  useEffect(() => {
    handleIndexUsers();
  }, []);

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<ItemsIndex items={items} />} />
        <Route path="/acount" element={<Acount />} />
        <Route path="/items/:itemId" element={<ItemShow items={items} />} />

        <Route path="/users" element={<UserIndex users={users} items={items} />} />
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
        <UserItemShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
      </Modal>
    </div>
  );
}

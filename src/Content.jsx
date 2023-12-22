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

export function Content() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

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

        <Route path="/userprofile/:userId" element={<UserProfile users={users} items={items} />} />
      </Routes>
    </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ItemsIndex } from "./ItemsIndex";

export function Content() {
  const [items, setItems] = useState([]);

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  useEffect(handleIndexItems, []);

  return (
    <div>
      <Routes>
        <Route path="/items" element={<ItemsIndex items={items} />} />
      </Routes>
    </div>
  );
}

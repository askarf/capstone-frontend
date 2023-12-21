import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ItemsIndex } from "./ItemsIndex";
import ItemShow from "./ItemShow";

export function Content() {
  const [items, setItems] = useState([]);

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  useEffect(() => {
    handleIndexItems();
  }, []); // Correct dependency array to fix the ESLint warning

  return (
    <div>
      <Routes>
        <Route path="/items" element={<ItemsIndex items={items} />} />
        <Route path="/items/:itemId" element={<ItemShow items={items} />} />
      </Routes>
    </div>
  );
}

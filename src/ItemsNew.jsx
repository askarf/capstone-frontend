import React, { useState } from "react";
import axios from "axios";

export function ItemsNew() {
  const userID = localStorage.getItem("currentUser");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/items.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = `/userProfile/${userID}`;
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setError(error.response.data.errors.join(", "));
      });
  };
  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <div className="mb-5">
      <h1>New Item</h1>
      {error && (
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={closeErrorPopup}>Close</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-5">
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          size: <input name="size" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <div>
          condition: <input name="condition" type="text" />
        </div>
        <div>
          retail price: <input name="retail_price" type="text" />
        </div>
        <div>
          selling price: <input name="selling_price" type="text" />
        </div>

        <button type="submit">Create item</button>
      </form>
    </div>
  );
}

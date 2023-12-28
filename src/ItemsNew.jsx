import axios from "axios";

export function ItemsNew() {
  const userID = localStorage.getItem("currentUser");
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
      });
  };

  return (
    <div>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
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

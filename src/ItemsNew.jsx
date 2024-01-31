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
    <div className="pb-5 container">
      <h1>New Item</h1>
      <form onSubmit={handleSubmit} className="pb-5">
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          size: <input name="size" type="text" />
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
        <div>
          Image Url 1: <input name="url1" type="text" />
        </div>
        <div>
          Image Url 2: <input name="url2" type="text" />
        </div>
        <div>
          Image Url 3: <input name="url3" type="text" />
        </div>
        <div>
          Image Url 4: <input name="url4" type="text" />
        </div>
        <div>
          Image Url 5: <input name="url5" type="text" />
        </div>

        <button type="submit">Create item</button>
      </form>
    </div>
  );
}

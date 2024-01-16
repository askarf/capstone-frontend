/* eslint-disable react/prop-types */

export function UserItemShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateItem(props.item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyItem(props.item);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.item.description} name="description" type="text" />
        </div>
        <div>
          Size: <input defaultValue={props.item.size} name="size" type="text" />
        </div>

        <div>
          {/* Map through all images */}
          {props.item.images.map((image, index) => (
            <div key={index}>
              Image {index + 1}: <input defaultValue={image.url} name={`image_${index}`} type="text" />
            </div>
          ))}
        </div>
        <div>
          Condition: <input defaultValue={props.item.condition} name="condition" type="text" />
        </div>
        <div>
          Retail Price: <input defaultValue={props.item.retail_price} name="retail_price" type="text" />
        </div>
        <div>
          Selling Price:
          <input defaultValue={props.item.selling_price} name="selling_price" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleClick}>Delete Item</button>
    </div>
  );
}

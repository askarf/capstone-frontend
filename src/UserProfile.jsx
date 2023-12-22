/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function UserProfile(props) {
  const userId = localStorage.getItem("currentUser");
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchData = async () => {
      try {
        // Assuming you have an API endpoint to fetch user data by ID
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const userData = await response.json();
        setCurUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [userId]);

  if (!curUser) {
    // Data is still being fetched, or an error occurred
    return (
      <div>
        <p>Loading...</p> {/* Or display an error message */}
      </div>
    );
  }
  console.log("Rendering UserProfile component with curUser:", curUser.id);
  console.log("props.items:", props.items);
  return (
    <div>
      <h1>{curUser.name}s closet</h1>
      {props.items
        .filter((item) => item.user_id.toString() == curUser.id)
        .map((item) => (
          <div key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.size}</p>
              <p>{item.image}</p>
              <p>{item.condition}</p>
              <p>{item.retail_price}</p>
              <p>{item.selling_price}</p>
              <p>EDIT</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserProfile;

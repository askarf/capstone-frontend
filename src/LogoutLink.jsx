import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="container p-5">
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}

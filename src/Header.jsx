import { Link } from "react-router-dom";

export function Header() {
  const userId = [localStorage.getItem("currentUser")];
  return (
    <div>
      {localStorage.jwt === undefined ? (
        <div>
          <Link to={`/signup`}>Sign Up</Link> | <Link to={`/signin`}>Sign In</Link>
        </div>
      ) : (
        <div>
          <Link to={`/logout`}>Log Out</Link> | <Link to={`/userprofile/${userId}`}>Your Closet</Link>
        </div>
      )}
    </div>
  );
}

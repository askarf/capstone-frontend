import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      {localStorage.jwt === undefined ? (
        <div>
          <Link to={`/signup`}>Sign Up!</Link> | <Link to={`/signin`}>Sign In!</Link>
        </div>
      ) : (
        <div>
          <Link to={`/logout`}>Log Out!</Link> | <Link to={`/userprofile`}></Link>
        </div>
      )}
    </div>
  );
}

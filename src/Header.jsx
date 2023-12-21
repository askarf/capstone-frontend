import { Link } from "react-router-dom";

import { UserProfile } from "./UserProfile";

export function Header() {
  return (
    <div>
      <Link to={`/signup`}>Sign Up!</Link> | <Link to={`/signin`}>Sign In!</Link> | <Link to={`/logout`}>Log Out!</Link>
      <h1>
        <UserProfile />
      </h1>
    </div>
  );
}

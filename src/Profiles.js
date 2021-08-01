import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3> User List </h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">Velopert</Link>
        </li>
        <li>
          <Link to="/profiles/homer">Homer</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Select User </div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}
export default Profiles;

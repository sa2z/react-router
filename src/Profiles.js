import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
  return (
    <div>
      <h3> User List </h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">Velopert</Link> */}
          <NavLink
            to="/profiles/velopert"
            activeStyle={{ background: "black", color: "white" }}
            isActive={(match, location) => {
              return true;
            }}
          >
            Velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: "black", color: "white" }}
            activeClassName="active"
          >
            Homer
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Select User </div>} />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}
export default Profiles;

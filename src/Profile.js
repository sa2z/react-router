import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  velopert: {
    name: "Mr.Kim",
    description: "Kind man in the world"
  },
  homer: {
    name: "Homer Simson",
    description: "The father character of Simson family"
  }
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div> This user does not exist </div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}
export default Profile;

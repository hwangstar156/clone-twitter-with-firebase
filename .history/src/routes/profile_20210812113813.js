import { authService } from "firebase/fbase";
import React from "react";

const Profile = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <button>Log Out</button>
    </>
  );
};

export default Profile;

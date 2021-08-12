import { authService, dbService } from "firebase/fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  let history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyTwits = async () => {
    const twit = await dbService
      .collection("twits")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createAt")
      .get();
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setNewDisplayName(event.target.value);
  };
  useEffect(() => {
    getMyTwits();
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="display Name"
          onChange={onChange}
          value={newDisplayName}
        />
        <input type="submit" placeholder="update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;

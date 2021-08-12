import { authService, dbService } from "firebase/fbase";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  let history = useHistory();
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
    console.log(twit.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyTwits();
  });
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;

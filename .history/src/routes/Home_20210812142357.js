import Twit from "components/tweet";
import { dbService } from "firebase/fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    dbService.collection("twits").onSnapshot((snapshot) => {
      const twitArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTwits(twitArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("twits").add({
      text: twit,
      createAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTwit("");
  };
  const onChange = (event) => {
    setTwit(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what's on your mind"
          maxLength={140}
          value={twit}
          onChange={onChange}
        />
        <input type="submit" value="twit" />
      </form>
      <div>
        {twits.map((item) => (
          <Twit {...item} />
        ))}
      </div>
    </>
  );
};

export default Home;

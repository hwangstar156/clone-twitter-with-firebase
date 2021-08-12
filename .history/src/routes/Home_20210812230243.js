import Twit from "components/tweet";
import { dbService } from "firebase/fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
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

  return (
    <>
      <div>
        {twits.map((item) => (
          <Twit
            key={item.id}
            twitObj={item}
            isOwner={item.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

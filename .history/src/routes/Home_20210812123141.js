import { dbService } from "firebase/fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);
  const getTwits = async () => {
    const Ourtwits = await dbService.collection("twits").get();
    Ourtwits.forEach((document) => {
      const twitObj = {
        ...document.data(),
        id: document.id,
      };
      setTwits((prev) => [twitObj, ...prev]);
    });
  };
  useEffect(() => {
    getTwits();
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("twits").add({
      twit: twit,
      createAt: Date.now(),
    });
    setTwit("");
  };
  const onChange = (event) => {
    setTwit(event.target.value);
  };
  console.log(twits);
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
          <h4 key={item.id}>{item.twit}</h4>
        ))}
      </div>
    </>
  );
};

export default Home;

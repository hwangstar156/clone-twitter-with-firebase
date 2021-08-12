import { dbService } from "firebase/fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [twit, setTwit] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dbService.collection("twits").add({
      twit: twit,
      createAt: Date.now(),
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
    </>
  );
};

export default Home;

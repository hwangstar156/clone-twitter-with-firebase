import React from "react";

const Home = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="what's on your mind" maxLength={140} />
        <input type="submit" value="twit" />
      </form>
    </>
  );
};

export default Home;

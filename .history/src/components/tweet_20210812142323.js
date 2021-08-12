import React from "react";

const Twit = ({ twitObj }) => {
  return (
    <div key={twitObj.id}>
      <h4>{twitObj.text}</h4>
    </div>
  );
};

export default Twit;

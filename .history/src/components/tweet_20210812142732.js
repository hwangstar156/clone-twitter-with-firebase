import React from "react";

const Twit = ({ twitObj }) => {
  return (
    <div>
      <h4>{twitObj.text}</h4>
      <button>Delete Twit</button>
      <button>Edit Twit</button>
    </div>
  );
};

export default Twit;

import React from "react";

const Twit = ({ twitObj, isOwner }) => {
  const onDeleteClick = () => {
    const ok = window.confirm("Are you sure???");
    if (ok) {
    }
  };
  return (
    <div>
      <h4>{twitObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete Twit</button>
          <button>Edit Twit</button>
        </>
      )}
    </div>
  );
};

export default Twit;

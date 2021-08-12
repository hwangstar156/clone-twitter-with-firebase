import { dbService } from "firebase/fbase";
import React, { useState } from "react";

const Twit = ({ twitObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTwit, setNewTwit] = useState(twitObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure???");
    if (ok) {
      await dbService.doc(`twits/${twitObj.id}`).delete();
    }
  };

  const updateClick = () => {};
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

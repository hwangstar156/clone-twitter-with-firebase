import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "firebase/fbase";

const twitFactory = ({ userObj }) => {
  const [twit, setTwit] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let fileUrl = "";
    if (file !== "") {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(file, "data_url");
      fileUrl = await response.ref.getDownloadURL();
    }
    const tweet = {
      text: twit,
      createAt: Date.now(),
      creatorId: userObj.uid,
      fileUrl,
    };
    await dbService.collection("twits").add(tweet);
    setTwit("");
    setFile("");
  };

  const onChange = (event) => {
    setTwit(event.target.value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishEvent) => {
      setFile(finishEvent.currentTarget.result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearImage = () => {
    setFile(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="what's on your mind"
        maxLength={140}
        value={twit}
        onChange={onChange}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="twit" />
      {file && (
        <div>
          <img src={file} alt="" width="50px" height="50px" />
          <button onClick={onClearImage}>Clear image</button>
        </div>
      )}
    </form>
  );
};

export default twitFactory;

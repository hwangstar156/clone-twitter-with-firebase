import Twit from "components/tweet";
import { dbService, storageService } from "firebase/fbase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Home = ({ userObj }) => {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);
  const [file, setFile] = useState();

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
    const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
    const response = await fileRef.putString(file, "data_url");
    console.log(await response.ref.getDownloadURL());
    // await dbService.collection("twits").add({
    //   text: twit,
    //   createAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    // setTwit("");
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
    <>
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

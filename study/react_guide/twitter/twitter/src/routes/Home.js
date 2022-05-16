import { dbService, storageService } from "fbase";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tweet from "components/Tweet";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Home = ({userObj}) => {
    const [tweet, setTweet] = useState('');
    const [tweets, setTweets] = useState([]);
    const [attachment, setAttachment] = useState('');
    useEffect(() => {
        const q = query(collection(dbService, "tweets"),orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const tweetArr = snapshot.docs.map((document) => ({
                id: document.id, ...document.data(),
            }));
        setTweets(tweetArr);
        });
    }, []);
    const onSubmit = async (event) => {
        if (tweet === "") {
            return;
        }
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }
        const tweetObj = {
            text: tweet,
            createdAt: Date.now(),
            createrId: userObj.uid,
            attachmentUrl
        }
        await addDoc(collection(dbService, "tweets"), tweetObj);
        setTweet('');
        setAttachment('');
    };
    const onChange = (event) => {
        const {target:{value},} = event;
        setTweet(value);
    };
    const onFileChange = (event) => {
        const {target:{files},} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const { currentTarget: { result }, } = finishedEvent
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => {setAttachment('')};
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="factoryForm">
                <div className="factoryInput__container">
                    <input value={tweet} onChange={onChange} type= "text" placeholder="what's on your mind" maxLength={120} className="factoryInput__input" />
                    <input type="submit" value="&rarr;" className="factoryInput__arrow" />
                </div>
                <label htmlFor="attach-file" className="factoryInput__label">
                    <span>Add photos</span>
                    <FontAwesomeIcon icon={faPlus} />
                </label>
                <input id="attach-file" onChange={onFileChange} type= "file" accept="image/*" style={{opacity: 0}} />
                <input type= "submit" value="Tweet" />
                {attachment && (
                    <div className="factoryForm__attachment">
                        <img src={attachment} style={{backgroundImage: attachment}}/>
                        <div className="factoryForm__clear" onClick={onClearAttachment}>
                            <span>Remove</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                )}

            </form>
            <div style={{ marginTop: 30 }}>
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.createrId === userObj.uid} />
                ))}
            </div>
        </div>
    )
}

export default Home;
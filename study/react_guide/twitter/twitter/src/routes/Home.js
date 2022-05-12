import { dbService } from "fbase";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = ({userObj}) => {
    const [tweet, setTweet] = useState('');
    const [tweets, setTweets] = useState([]);
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
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "tweets"), {
                text: tweet,
                createdAt: Date.now(),
                createrId: userObj.uid,
            }); 
        } catch (event) {
            console.error("Error adding document: ", event);
        }
        setTweet('');
    };

    const onChange = (event) => {
        const {target:{value},} = event;
        setTweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={tweet} onChange={onChange} type= "text" placeholder="what's on your mind" maxLength={120} />
                <input type= "submit" value="Tweet" />
            </form>
            <div>
                {tweets.map((tweet) => (
                    <div key={tweet.id}>
                        <h4>{tweet.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
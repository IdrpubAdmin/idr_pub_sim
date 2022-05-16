import { authService, dbService } from "fbase";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

const Profile = ({ userObj }) => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    }
    const getMyTweets = async() => {
        const q = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", userObj.uid)
        )
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    useEffect(() => {
        getMyTweets();
    }, [])
    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
            <span>Profile</span>
        </>
    );
};

export default Profile;
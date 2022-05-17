import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { updateProfile } from "@firebase/auth";

const Profile = ({ userObj }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)
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
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, { displayName: newDisplayName });
        }
    }
    useEffect(() => {
        getMyTweets();
    }, [])
    return(
        <>
            <div className="container">
                <form onSubmit={onSubmit} className="profileForm">
                    <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} className="formInput" />
                    <input type="submit" placeholder="Update Profile" className="formBtn" style={{marginTop: 10}} />
                </form>
                <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>Log Out</span>
            </div>
        </>
    );
};

export default Profile;
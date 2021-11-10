import React, { useState, useEffect } from 'react';
import AddFriend from './AddFriend';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';



const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response.data)
            setFriends(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <AddFriend setFriends={setFriends}/>
           {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}/>))
                }            
        </div>
    );
};

export default FriendsList; 
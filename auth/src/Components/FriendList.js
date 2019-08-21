  
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './FriendCard'

const FriendsList = props => {
  const [friends, setFriends] = useState(null);
  const getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      {!friends ? (
        <p>Loading friends list...</p>
      ) : (
        <div>
          {friends.map(friend => {
            return <Friend id={friend.id} friend={friend} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
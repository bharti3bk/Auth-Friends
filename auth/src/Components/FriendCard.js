import React from "react";

const Friend = ({ friend }) => {
  return (
    <div className="card">
      <h3>{friend.name}</h3>
      <p>{friend.age} years old</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default Friend;
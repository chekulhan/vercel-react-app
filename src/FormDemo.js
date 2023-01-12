import React, { useState } from "react";


export default function FormDemo() {
  const [userInfo, setUserInfo] = useState({
    name: "aaa",
    age: 12
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitting");
    alert(userInfo.age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        name
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <br />
        age
        <input
          type="number"
          name="age"
          value={userInfo.age}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{userInfo.name}</p>
      <p>{userInfo.age}</p>
    </div>
  );
}

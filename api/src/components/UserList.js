import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setusers(res.data);
      });
    } catch (error) {}
  }, []);
  console.log(users);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((el) => (
        <div
          style={{
            border: "solid 2px grey",
            border: "2px solid grey",
            margin: "30px",
            width: "20%",
            height: "269px",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "5px 5px 10px",
            backgroundColor: "#9c93f7cc",
          }}
        >
          <div>
            <div className="name">
              <h1>{el.name}</h1>
            </div>
            <h1>{el.username}</h1>
            <h2>{el.email}</h2>
            <h2>{el.phone}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;

import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = { username, password };

    const data = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(
        "https://todo-backend-two-bice.vercel.app/register",
        data
      );

      if (res.status === 201) {
        const resObj = await res.json();
        localStorage.setItem("token", resObj.token);
        localStorage.setItem("username", resObj.userName);
        // we are navigating to another route using useNavigate hook
        navigate("dashboard");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        {/* <label htmlFor=""></label> */}
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

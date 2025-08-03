"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import "../globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
const login = () => {

  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function localstore(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    console.log("Data successfully stored in local storage");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localstore(name, password);
       router.push("/");
  };

  return (
    <>
      <div className="login">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="signinbtn" type="submit">Sign in</button>
            <p id="or"> - or -</p>
            <button
              className="signinbtn"
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign in with Google
            </button>
            <br />
            {/* <button
              className="signinbtn"
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              Sign in with GitHub
            </button> */}
          </form>
        </div>
        <div className="right1">
          <h1>Welcome to the Login Page</h1>
        </div>
      </div>
    </>
  );
};

export default login;

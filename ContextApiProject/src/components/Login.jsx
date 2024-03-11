import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  
  return (
    <div className="flex flex-col">
      <h2>Login</h2>
      <input 
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="bg-green-400 px-3 py-2 m-2 text-xl rounded-xl hover:bg-red-200 hover:text-black active:opacity-10" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

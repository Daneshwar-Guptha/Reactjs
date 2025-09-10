import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { name } = props
  const navigate = useNavigate();



  function checkTheDetails(event) {

    event.preventDefault();

    if (userName === "sai"  && password === "sai") {
      localStorage.setItem("access_token",true)
        navigate("/Home");
         window.location.reload(); 
     
    }
    else{
      alert("Enter correct details")
    }
  }


  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={checkTheDetails}>
        <label htmlFor="userName">Username</label>
        <br />
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const credentials = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(credentials);
  const [error, setError] = useState();
  let history = useHistory();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login)
      .then((response) => {
        console.log("HEY!!!", response.data.payload);
        window.localStorage.setItem("token", response.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => {
        console.log(err.response);
      });
    if (login.username === "" || login.password === "") {
      setError("Fields must be complete");
    } else if (
      login.username !== "Lambda School" ||
      login.password !== "i<3Lambd4"
    ) {
      setError("Incorrect Credentials");
    }
  };

  //replace with errconstor state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={submit}>
          <input
            data-testid="username"
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            data-testid="password"
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
      <p data-testid="errorMessage" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.

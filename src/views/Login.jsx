import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //ambil data dari context
  const [user] = useContext(UserContext);
  // const [personal, setPersonal] = useContext(UserContext);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    //stop from
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let id = Date.now();

    // setPersonal({
    //   id: id,
    //   email: email,
    // });
    nav("/");
  };
  return (
    <>
      <h3>Login {user.email}</h3>
      <form action="auth_form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;

import React, { useContext, userContext } from "react";
import { UserContext } from "../contexts/userContext";
import "./Navar.css";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <nav className="navbar">
      <h2>Judul</h2>
      <span className="user">{user.email}</span>
    </nav>
  );
};

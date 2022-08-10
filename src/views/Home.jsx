import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Link } from "react-router-dom";
// import Navbar from "../component/Navbar";

const Home = () => {
  // ambil dari context
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="App">
      {/* <Navbar> */}
      <h1>Home Page {user.email}</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      {/* </Navbar> */}
    </div>
  );
};
export default Home;

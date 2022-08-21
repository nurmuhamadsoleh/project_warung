import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
// import Navbar from "../component/Navbar";

const Home = () => {
  // ambil dari context
  const [dataNew, setDataNew] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/1",
    }).then((res) => {
      console.log(res);
      const dataArray = res.data;
      console.log(dataArray);
      if (res.status === 200) {
        setDataNew(dataArray);
      }
      // setLoading(false);
    });
    console.log(data).catch((err) => {
      console.log(false);
      console.log(err);
      // setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {/* <Navbar> */}
      <h1>Home Page</h1>
      <br />
      <br />
      {loading ? <h1>Loading....</h1> : <h1>Nama {dataNew.email}</h1>}
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
    </div>
  );
};
export default Home;

// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
// import UserContextProvider from "./contexts/userContext";
// import Home from "./views/Home";
// import Dashboard from './component/Dashbord';
// import Navbar from './part/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

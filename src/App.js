// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashbord';
import Navbar from './part/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

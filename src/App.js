import './App.css';
import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home/Home';
import Calender from './Componant/Calender/Calender';
import ToDo from './Componant/ToDo/ToDo';
function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;

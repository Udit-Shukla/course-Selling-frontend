import SignUp from "./Pages/signUp";
import Home from "./Pages/home";
import Login from "./Pages/login";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Courses from "./Pages/Courses";

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar />

      {/* Defining Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </div>
  );
}

export default App;

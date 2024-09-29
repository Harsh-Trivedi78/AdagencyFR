import React from "react";
import Navbar from "./components/Navbar/NavbarElement"; // Import default Navbar component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Profile from './pages/profile';
import Login from "./pages/login";
import ForgotPass from './pages/forgotpass' // Make sure you have a Login component

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* Corrected typo here */}
        <Route path="/forgotpass" element={<ForgotPass />} /> {/* Corrected typo here */}
      </Routes>
    </Router> 
  );
}

export default App;
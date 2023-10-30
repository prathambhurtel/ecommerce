import react from 'react';
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="ourstore" element={<OurStore/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>

  </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

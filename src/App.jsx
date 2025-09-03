import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Features from "./component/Features/Features";
import Products from "./component/Products/Products";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import { useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  function changeStatus(data) {
    setLoginStatus(data);
  }

  return (
    <BrowserRouter>
      {!loginStatus ? (
        <Login name={changeStatus}  />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

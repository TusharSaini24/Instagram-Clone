import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dob from "./pages/Dob";
import EmailVerify from "./pages/EmailVerify";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Explore from "./components/Explore";
import { useState } from "react";

function App() {
  const user = true;
  const [show, setShow] = useState(false);

  return (
    <div className="bg-background relative">
      <BrowserRouter>
        {user && <Header setShow={setShow} />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dob" element={<Dob />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

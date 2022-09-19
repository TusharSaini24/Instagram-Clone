import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dob from "./pages/Dob";
import EmailVerify from "./pages/EmailVerify";
function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dob" element={<Dob />} />
          <Route path="/email-verify" element={<EmailVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

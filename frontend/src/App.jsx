import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import ForgotPassword from "./component/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
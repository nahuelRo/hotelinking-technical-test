import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";

import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { ResetPassword } from "./components/Auth/ResetPassword";
import { Header } from "./common/Header";
import { MyPromoCodes } from "./components/MyPromoCodes";

function App() {
  return (
    <div className="bg-slate-100">
      <Header />

      <div className="mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/:token" element={<ResetPassword />} />

          <Route path="/my-promo-codes" element={<MyPromoCodes />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

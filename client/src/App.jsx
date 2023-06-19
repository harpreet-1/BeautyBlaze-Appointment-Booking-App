// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Single from "./pages/Single";
import Services from "./pages/Services";
import ProfessionalDash from "./pages/ProfessionalDash";
import Professional from "./pages/Professional";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/ProfessionalDash" element={<ProfessionalDash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services/:q?" element={<Services />} />
            <Route path="/single/:id/:professionalId" element={<Single />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/professional" element={<Professional />} />
          </Route>

          <Route path="/business">
            <Route path="/business/dashboard" />
            <Route path="/business/addService" />
            <Route path="/business/apponitment" />
            <Route path="/business/EditServices" />
            <Route path="/business/deleteService" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

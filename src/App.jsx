import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paket from "./components/Pages/Paket";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import Order from "./components/Pages/User/Order";
import Dashboard from "./components/Admin/Dashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

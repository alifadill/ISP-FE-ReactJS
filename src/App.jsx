import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paket from "./components/Pages/Paket";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paket from "./components/Pages/Paket";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paket" element={<Paket />} />
      </Routes>
    </Router>
  );
};

export default App;

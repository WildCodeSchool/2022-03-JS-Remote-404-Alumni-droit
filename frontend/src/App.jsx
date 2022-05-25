import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Listing from "@pages/Listing";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/" element={<Listing />} />
    </Routes>
  );
}

export default App;

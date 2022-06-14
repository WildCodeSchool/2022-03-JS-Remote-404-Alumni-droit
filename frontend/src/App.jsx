import { Routes, Route } from "react-router-dom";

import Listing from "@pages/Listing";
import Identification from "@pages/Identification";
import SignUp from "@pages/SignUp";
import Profile from "@pages/Profile";
import RGPD from "@pages/RGPD";
import Header from "@components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/identification/" element={<Identification />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/rgpd/" element={<RGPD />} />
      </Routes>
    </div>
  );
}

export default App;

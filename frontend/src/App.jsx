import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Listing from "@pages/Listing";
import Identification from "@pages/Identification";
import SignUp from "@pages/SignUp";
import Profile from "@pages/Profile";
import RGPD from "@pages/RGPD";
import Navbar from "@components/Navbar";
import ProtectedRoute from "@components/Layout/ProtectedRoute";

import ExportContextUser from "./contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/identification/" element={<Identification />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route
          path="/rgpd/"
          element={
            <ProtectedRoute user={user}>
              <RGPD />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

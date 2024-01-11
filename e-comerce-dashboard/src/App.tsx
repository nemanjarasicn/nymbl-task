import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// components
import Dashboard from "./app/components/Dashboard";
import Inventory from "./app/pages/Inventory";
import Login from "./app/pages/LoginPage";
import ProtectedLayout from "./app/components/ProtectedLayout";

function App() {
  return (
    <div className="h-[100vh] w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedLayout />} />
        <Route
          path="/inventory"
          element={
            <Dashboard>
              <Inventory />
            </Dashboard>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

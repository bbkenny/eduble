"use client";

import { Navbar } from "./components/Navbar";
import { ParentDashboard } from "./components/ParentDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProtectedRoute allowedRoles={["parent"]}>
        <ParentDashboard />
      </ProtectedRoute>
    </>
  );
}

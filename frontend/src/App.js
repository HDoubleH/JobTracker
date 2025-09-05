import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <h1>Job Management App</h1>
      <Login />
      <Register />
      <Dashboard />
    </div>
  );
}

export default App;

import React from "react";
import JobList from "./JobList";
import JobForm from "./JobForm";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <JobForm />
      <JobList />
    </div>
  );
}

export default Dashboard;

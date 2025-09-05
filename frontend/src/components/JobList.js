import React, { useEffect, useState } from "react";
import api from "../api";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data.jobs));
  }, []);

  return (
    <div>
      <h3>Jobs</h3>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

// src/components/ITJobsComponent.jsx
import React from 'react';

const ITJobsComponent = ({ match }) => {
  const { job_selected } = match.params;

  return (
    <div>
      <h1>Hello World</h1>
      <p>You selected job: {job_selected}</p>
    </div>
  );
};

export default ITJobsComponent;

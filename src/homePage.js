import React, { useState, useEffect } from 'react';

function HomePage() {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    // Fetch resumes when the component mounts
    fetch('/api/resumes')
      .then((response) => response.json())
      .then((data) => setResumes(data))
      .catch((error) => console.error('Error fetching resumes:', error));
  }, []);

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
  };

  return (
    <div>
      <h2>Posted Resumes</h2>
      <ul>
        {resumes.map((resume) => (
          <li key={resume._id}>
            <button onClick={() => handleResumeClick(resume)}>
              {resume.name}'s Resume
            </button>
          </li>
        ))}
      </ul>
      {selectedResume && (
        <div>
          <h3>{selectedResume.name}'s Resume</h3>
          <p>Email: {selectedResume.email}</p>
          <embed src={selectedResume.resumeUrl} width="600" height="400" />
          {/* Add comments section here */}
        </div>
      )}
    </div>
  );
}

export default HomePage;


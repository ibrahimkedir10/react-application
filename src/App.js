import React, { useState, useEffect } from 'react';

function App() {
  const [resumes, setResumes] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Fetch resumes when the component mounts
    fetch('/api/resumes')
      .then((response) => response.json())
      .then((data) => setResumes(data))
      .catch((error) => console.error('Error fetching resumes:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', file);

    // Send a POST request to submit a new resume
    fetch('http://localhost:3001', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resume posted successfully:', data);

        // Fetch updated list of resumes after posting
        return fetch('http://localhost:3001');
      })
      .then((response) => response.json())
      .then((data) => setResumes(data))
      .catch((error) => {
        console.error('Error posting or fetching resumes:', error);
      });

    // Clear the form fields
    setName('');
    setEmail('');
    setFile(null);
  };

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
}

export default App;


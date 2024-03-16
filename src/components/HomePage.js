import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update this line
import Cookies from 'js-cookie';

function HomePage() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate(); // Replace useHistory with useNavigate
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Cookies.set('username', username, { expires: 1 });
      Cookies.set('name', name, { expires: 1 });
      navigate('/quizzes');
    };
    
  return (
    <div>
      <h1>Welcome to Quiz Game</h1>
      <p>Description of the game...</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Connect</button>
      </form>
    </div>
  );
}

export default HomePage;
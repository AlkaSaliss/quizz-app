import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Update this line
import Cookies from 'js-cookie';

function Navbar() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate
    const username = Cookies.get('username');
    const name = Cookies.get('name');
  
    const handleLogout = () => {
      Cookies.remove('username');
      Cookies.remove('name');
      navigate('/'); // Replace history.push with navigate
    };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quizzes">Quizzes</Link>
        </li>
        {username && (
          <>
            <li>{name}</li>
            <li>
              <button onClick={handleLogout}>Disconnect</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

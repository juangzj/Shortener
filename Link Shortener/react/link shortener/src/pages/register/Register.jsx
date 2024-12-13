import { useState } from 'react';
import './Register.css';
import axios from 'axios'; //axios import
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/shortener/users/createUser'

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * method to create a new user with axios
   * @param {*} e 
   */
  const newUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URI, { username: username, email: email, password: password })
      navigate('/login')
    } catch (error) {
      console.log(error);
      alert("Error, the user could not be created")
    }

  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={newUser}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

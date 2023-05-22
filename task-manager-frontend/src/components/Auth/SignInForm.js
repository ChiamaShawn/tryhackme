import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../modules/Auth/Auth';
import authAPI from '../../modules/Auth/authAPI';
import { Form, Button } from 'react-bootstrap';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.signIn(username, password);
      if (response) {
        localStorage.setItem('token', response);
        Auth.isAuthenticated = true;
        navigate('/tasks');
      } else {
        // Invalid credentials
        console.log(response);  
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log('Error signing in:', error);
      throw new Error('Invalid username or password');
    }
  };

  return (
    <Form onSubmit={handleSignIn}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default SignInForm;
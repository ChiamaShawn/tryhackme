import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import Auth from '../modules/Auth/Auth';
import authAPI from '../modules/Auth/authAPI';

import SignInForm from '../components/Auth/SignInForm';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h1>Sign In</h1>
          <SignInForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
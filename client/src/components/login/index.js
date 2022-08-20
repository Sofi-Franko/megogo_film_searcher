import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context';

import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

function Login() {
  let navigate = useNavigate();
  let auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.login({ email, password });
    } catch (e) {
      console.log(`e`, e);
      setHasError(true);
    }

    navigate('/filmList');
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header as="h1">Login</Card.Header>
        <Card.Body>
          <Form className="w-100" onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={onEmailChange}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onPasswordChange}
                value={password}
              />
            </Form.Group>
            {hasError && (
              <Alert variant={'danger'}>
                The email address and password you entered don`t match any account. Please try
                again.
              </Alert>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;

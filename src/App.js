import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input }
from 'reactstrap'

function App() {
  return (
    <Form className="login-app">
      <h1>Login Page</h1>
   

    <FormGroup>
<Input type = "email" placeholder="Username"></Input>
    </FormGroup>

    <FormGroup>
    <Input type = "password" placeholder="Password"></Input>
    </FormGroup>

    <Button>Sign in</Button>
<div className="text-center pt-3"> 
Create an account
</div>

<div className="text-center">
  <a href="/sign-up">Sign up</a>

</div>
    </Form>
  );
}

export default App;

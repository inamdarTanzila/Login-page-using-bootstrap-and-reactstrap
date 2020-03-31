import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input }
from 'reactstrap'

function App() {
  return (
    <Form className="login-app">
      <h1>Login Page</h1>
   

    <FormGroup className="username">
<Input type = "email" placeholder="Username"></Input>
    </FormGroup>
<br></br>
    <FormGroup>
    <Input type = "password" placeholder="Password"></Input>
    </FormGroup>
    <br></br>
    <Button>Sign in</Button>
    <br></br>
<div className="text-center pt-3"> 
Create an account

  <a href="/sign-up">Sign up</a>

</div>
    </Form>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Input }
  from 'reactstrap'
import * as yup
  from 'yup';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(),

  password: yup
    .string()
    .max(8)
    .required()

})

function App() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = (event) => { setUserName(event.target.value) }
  const updatePassword = (event) => { setPassword(event.target.value) }
  const login = () => {
    validationSchema.isValid({
      username: username,
      password: password
    })
    .then(function (valid) {
      console.log(username,password, valid)
    });
  }
  return (


    <Form className="login-app">


      <h1>Login Page</h1>


      <FormGroup className="username">
        <Input type="email" placeholder="Username" onChange={updateUsername} value={username}></Input>
      </FormGroup>
      <br></br>
      <FormGroup>
        <Input type="password" placeholder="Password" onChange={updatePassword} value={password} ></Input>
      </FormGroup>
      <br></br>
      <Button onClick={login}>Sign in </Button>
     
      <br></br>
      <div className="text-center pt-3">
        Create an account
  <a href="/sign-up">Sign up</a>
      </div>

    </Form>
  );
}

export default App;

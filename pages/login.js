import { useEffect, useState } from "react"
import {signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function handleGoogleLogIn(params) {
    signIn('google', {callbackUrl: "http://localhost:3000"})
  }

  async function handleGitHubLogIn(params) {
    signIn('github', {callbackUrl: "http://localhost:3000"})
  }

  async function handleFacebookLogIn(params) {
    signIn('facebook', {callbackUrl: "http://localhost:3000"})
  }
  return (
      <>
      <p className='mb-4'>
        Please Sign Up if you do not have an account
      </p>
      <input
        type='email'
        placeholder='Your Email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <br/>
      <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />

      <br/>
      <br/>
        <button> Sign Up</button>
      <br/>
      <br/>
      <p>Do you have an account?</p>
      <br/>
      <br/>
        <button> Login</button>
      <br/>
      <br/>
        <button onClick={handleGoogleLogIn}>Google Login</button>
      <br/>
      <br/>
        <button onClick={handleGitHubLogIn}>Github Login</button>
      <br/>
      <br/>
        <button onClick={handleFacebookLogIn}>Facebook Login</button>
      </>
  );
}
export default Login;
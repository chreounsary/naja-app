import { useEffect, useState } from "react"
import { Formik } from 'formik';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const router = useRouter();
  async function handleGoogleLogIn(params) {
    signIn('google', {callbackUrl: "http://localhost:3000"})
  }

  async function handleGitHubLogIn(params) {
    signIn('github', {callbackUrl: "http://localhost:3000"})
  }

  async function handleFacebookLogIn(params) {
    signIn('facebook', {callbackUrl: "http://localhost:3000"})
  }

  async function handleLogin(values) {
    values.preventDefault();
    const status = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/"
    })
    if (status.ok)router.push(status.url);
  }

  return (
    <form onSubmit={handleLogin}>
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
        <input type='submit' value='Login' />
      <br/>
      <br/>
      <button onClick={handleGoogleLogIn}>Google Login</button>
      <br/>
      <br/>
      <button onClick={handleGitHubLogIn}>Github Login</button>
      <br/>
      <br/>
      <button onClick={handleFacebookLogIn}>Facebook Login</button>
    </form>
  );
}
export default Login;

export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  if (session) {
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}

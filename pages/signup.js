import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { getSession } from "next-auth/react";

const SignupForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      };
      await fetch('http://localhost:3000/api/auth/signup', options)
        .then((data) =>{
          if(data.status == 201)router.push('http://localhost:3000/profile')
        })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />      
      <br/>
      <br/>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <br/>
      <br/>
      <label htmlFor="password">password </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;

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

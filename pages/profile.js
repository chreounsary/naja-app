import Link from "next/link";
import { getSession } from "next-auth/react";

export default function profile() {
  return (
    <>
      <label>Name:</label>
      <span></span>
    </>
  )
}

export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  if (!session) {
    return{
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Logout = () => {
  const logout = signOut();
  if (logout) 
  return{
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}

export default Logout;

// export async function getServerSideProps ({req, res, next}){
//   const session = await getSession({req});
//   if (!session) {
//     return{
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {session}
//   }
// }

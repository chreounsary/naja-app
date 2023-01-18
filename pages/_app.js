// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { SessionProvider } from "next-auth/react"
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App({Component, pageProps}){
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
export default App;

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

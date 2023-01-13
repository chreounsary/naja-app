import { useEffect } from "react"
import handler from "../../api/hello"
const baseUrl = "http://localhost:3000";
export async function getStaticProps(context) {
  return {
    props: { post: {name : 'getStaticProps'} },
  }
}

export default function Category({post}) {
  useEffect(()=>{
    const hh = async ()=>{
      console.log("posts");
      const res = await fetch(`${baseUrl}/api/category`);
      const posts = await res.json()
      console.log(posts);
    }
    hh();
  },[])

  return <div>Category</div>
}


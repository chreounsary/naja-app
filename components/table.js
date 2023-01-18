import { getUser } from "../lib/helper";
import { useQuery } from "react-query";
export default function Table(options) {
  const {isLoading, isError, data,  error} = useQuery('users', getUser)
  console.log(data);
  if (isLoading) return () => {
    <div>
      is Loading...
    </div>
  }
  if (isError) return () => {
    <div>
      is Error...
    </div>
  }
  return (
    <>
    {data?.users?.map((data, key) => (
      <>
        <p>{data._id} {key}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        </>
      ))}
     
    </>
  );
}

function Tr(){
  return (
    <>
      table data
    </>
  );
}
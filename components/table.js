import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import Example from "./users/addUserForm";
export default function Table(options) {
  const {isLoading, isError, data,  error} = useQuery('users', getUsers)
  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch();
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
  const handleUpdate = (e) => {
    dispatch(toggleChangeAction())
    console.log(visible);
  }
  const handleDelete = (e) => {
    console.log('Delete click button');
  }
  return (
    <>
  <Example/>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.users.map((data, index )=> (
                    <tr key={index}>
                        <td class="px-6 py-4" >
                            {data?.name}
                        </td>
                        {/* <td class="px-6 py-4">
                            <p>{data?.email}</p>
                        </td>
                        <td class="px-6 py-4">
                            {data?.role}
                        </td>
                        <td class="px-6 py-4">
                        {data?.is_active}
                        </td> */}
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
     
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
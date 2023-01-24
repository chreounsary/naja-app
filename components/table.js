import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import { useState } from "react";
import AddUserForm from "./users/addUserForm";
import UpdateUserForm from "./updateFormUser";
export default function Table(options) {
  const {isLoading, isError, data,  error} = useQuery('users', getUsers)
  const visible = useSelector((state) => state.app.client.toggleForm)
  const [visibleForm, setVisbleForm] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    dispatch(toggleChangeAction())
    setVisbleForm(visibleForm ? false : true)

    console.log(visible);
  }
  const handleDelete = (e) => {
    console.log('Delete click button');
  }
  // () => {} function
  // {} init val

  return (
    <>
        {visibleForm ? <UpdateUserForm/> : <></>}
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
                {data?.users?.map((data, key) => (
                    <tr key={key}>
                        <td class="px-6 py-4">
                            {data.name}
                        </td>
                        <td class="px-6 py-4">
                            <p>{data.email}</p>
                        </td>
                        <td class="px-6 py-4">
                            {data.role}
                        </td>
                        <td class="px-6 py-4">
                        {data.is_active}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleUpdate}>Edit</button>
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
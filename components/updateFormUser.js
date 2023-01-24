import { useReducer } from 'react'
import { IoAddCircleSharp } from "react-icons/io5";
import { isError, useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { addUser, getUsers } from '../lib/helper';
import Success from './success';

const formReducer = (state, event) => {
  
  console.log(event.target.value);
  return {
    ...state,
    // name: event.target.value,
    [event.target.name]: event.target.value
  }
}

export default function UpdateUserForm() {
  // () => {} function
  // {} init val
  const [formData, setFormData] = useReducer(formReducer, {});
  const queryClient = useQueryClient();
  const formId = useSelector((state) => state.app.formId);
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery('users', getUsers)
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return 'No data input';
    let {name, email, password, role} = formData;
    
    const model = {
      name: name,
      email: email,
      password: password,
      role: role
    }
    addMutation.mutate(model);
    if (addMutation.isError) return 'Error';
    
   }
   if (addMutation.isSuccess) return <Success/>;

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlhtmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Name"
              onChange={setFormData}
            />
          </div>
          <br/>
          <div>
            <label htmlhtmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              onChange={setFormData}
            />
          </div>
          <br/>
          <div>
            <label htmlhtmlFor="password" className="sr-only">
              Password
            </label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={setFormData}
                />
              </div>
              <br/>
              <div class="flex justify-left">
                <div class="form-check form-check-inline">
                  <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" 
                  name="teacher" 
                  id="inlineRadio1" 
                  onChange={setFormData}
                  value="teacher"
                  />
                  <label class="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Teacher</label>
                  
                </div>
                <div class="form-check form-check-inline">
                  <input 
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="student" 
                  id="inlineRadio2"
                  onChange={setFormData}
                  value="student"/>
                  <label class="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">Student</label>
                </div>
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                createdd
                <span className="px-1"><IoAddCircleSharp size={24}></IoAddCircleSharp></span>
              </button>
            </div>
            <br/>
      </form>
    </>
  )
}

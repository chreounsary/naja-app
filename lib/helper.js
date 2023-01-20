const BASE_URL = 'http://localhost:3000';

export const getUsers = async (req, res) => {
  const response = await fetch(`${BASE_URL}/api/users`)
  const json = await response.json();

  return json;
}

export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`)
  const json = await response.json();

  if(json) return json
  return {};
}

export const addUser = async () => {
  const Options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(`${BASE_URL}/api/users`, Options)
  const json = await response.json();
  if(json) return json
  return {}
}

export const removeUser = async (userId) => {
  const Options = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
  const json = await response.json()
  if(json) return json
  return {};
}

export const updateUser = async (userId) => {
  const Options = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)

  const json = await response.json

  if (json) return json
  return {}
}
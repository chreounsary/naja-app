import connectMongo from "../../../database/conn";
import { getUsers, postUsers } from "../../../database/controller/user";

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({error: 'Error in the connections'}));
  const {method} = req;
  switch (method) {
    case 'GET':
      console.log(req);
      getUsers(req, res)
      break;
    case 'POST':
      postUsers(req, res)
      break;
    case 'PUT':
      res.status(200).json({method, name:'PUT request'});
      break;
    case 'DELETE':
      res.status(200).json({method, name:'DELETE request'});
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(404).end(`Method ${method} not supported`);
  }
}

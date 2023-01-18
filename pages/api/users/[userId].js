import connectMongo from "../../../database/conn";
import { getUser } from "../../../database/controller/user";
export default async function handler (req, res, next) {
  connectMongo().catch(() => res.status(405).json({error: 'Error in the connection'}));
  const { method } = req;
  switch (method) {
    case 'GET':
      getUser(req, res, next)
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

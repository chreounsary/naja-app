import connectMongo from "../../../database/conn";
import { getProfiles, postProfiles } from "../../../database/controller/profile";

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({error: 'Error in the connections'}));
  const {method} = req;
  switch (method) {
    case 'GET':
      getProfiles(req, res)
      break;
    case 'POST':
      postProfiles(req, res)
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
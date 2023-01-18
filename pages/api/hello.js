// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


import connectMongo from '../../database/conn';
export default function handler(req, res) {
  connectMongo();
  // console.log(doc);
  // res.json(doc);
  res.status(200).json({name: 'naja'});
}
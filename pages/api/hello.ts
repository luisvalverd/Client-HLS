// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { lastname } = req.query;
  //res.status(200).json({ name: 'John Doe'})
  res.status(200).end(`latname: ${lastname}`);
}

import type { NextApiRequest, NextApiResponse } from 'next'

const getExchange = async () => {
  const response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)

  return await response.json()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json(await getExchange())
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'

const where = encodeURIComponent(
  JSON.stringify({
    population: {
      $gte: 1000000
    }
  })
)

const getCities = async () => {
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Russia_City?limit=214&order=name&keys=name&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': process.env.B4A_APP_ID!,
        'X-Parse-REST-API-Key': process.env.REST_KEY!
      }
    }
  )

  return (await response.json()).results
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json(await getCities())
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}

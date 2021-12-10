import { NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => { 
    const users = [
        {id: 1, name: 'Manoel'},
        {id: 2, name: 'Silva'},
        {id: 3, name: 'Teixeria'},
    ]

    return response.json(users)
}
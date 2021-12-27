import { useQuery } from "react-query";
import {api} from '../api'

type Users = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type GetUsersResponse = {
    totalCount: number;
    users: Users[]
}

export async function getUsers(page: number): Promise<GetUsersResponse>{
        const { data, headers } = await api.get("http://localhost:3000/api/users", {
            params: {
                page    
            }
        })
    
        const totalCount = Number(headers['x-total-count'])
        
        const users = data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.created_at).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

        return {users, totalCount};
    }

export function useUsers(page: number) {
    return useQuery(['users', page], () => getUsers(page),{
        staleTime: 1000 * 5 //5 SEGUNDOS
    })
}
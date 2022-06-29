import axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '025d03b5-09be-42be-a133-c9f36a02b000',
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    follow(userId: string) {
        return instance.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
    unFollow(userId: string) {
        return instance.delete(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
}

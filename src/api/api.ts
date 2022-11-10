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
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(newStatus: string) {
        return instance.put(`profile/status/`, { status: newStatus })
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        // @ts-ignore
        return instance.put(`profile/photo`, formData, {
            // @ts-ignore
            headers: 'Content-Type: multipart/form-data',
        })
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

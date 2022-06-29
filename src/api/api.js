import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd3aa0f2b-9203-49cd-974d-e39705f26cca'
    }

})
export const API = {
    getUsers(currentPageNumber, pageCount) {
        return instance.get(`users?page=${currentPageNumber}&count=${pageCount}`).then(responce => {
            return responce.data
        })
    },
    getDataUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    isAuthMe() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(responce => {
            return responce.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(responce => {
            return responce.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(responce => {
            return responce.data
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(responce => {
            return responce
        })
    },
    login({email,password,rememberMe}) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
        }).then(responce => {
            return responce
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(responce => {
            return responce
        })
    }
}
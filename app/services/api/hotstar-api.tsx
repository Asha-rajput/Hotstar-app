import axios from 'axios'
const base_url = 'https://api.themoviedb.org/3/'
const api_key = '?api_key=40b7d7ad3c8844f77205bb922bab6d0f'
export const getAPI = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(base_url + url + api_key).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export const postAPI = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(base_url + url + api_key, data).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
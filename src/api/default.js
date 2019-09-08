import axios from 'axios'

const auth = { headers: { 'Authorization': 'Basic {' + btoa('testing:testing123') + '}'} };
const api = window.api ? window.api : axios.create({ 
    baseURL: '', 
    withCredentials: false 
});

const handleResponse = (res, resolve, reject) => {
    (res.status === 200 ) ? resolve(res.data) : reject(res.statusText);
}

export const buildPromise = (method, endPoint, data, config) => {
    return new Promise((resolve, reject) => {
        method(endPoint, data, config)
            .then(res => handleResponse(res, resolve, reject))
            .catch(reason => reject(reason))
    });
}

export function apiGet(endPoint, config) {
    return buildPromise(api.get, endPoint, {}, config);
}

export function apiPost(endPoint, data) {
    return buildPromise(api.post, endPoint, data);
}

export function apiPut(endPoint, data) {
    return buildPromise(api.put, endPoint, data, auth);
}

export function apiDelete(endPoint, data) {
    return buildPromise(api.delete, endPoint, data);
}


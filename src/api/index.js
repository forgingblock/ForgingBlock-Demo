import { apiGet, apiPost, apiPut, apiDelete } from './default'


window.BASE_URL = 'https://api.forgingblock.io/';
const base = window.BASE_URL || '';

function sendTransaction(data) {
    return apiPut(base + 'cardconnect/rest/auth', data);
}

function postTest(data) {
    return apiPost(base + 'register', { 'email': 'enze@gmail.com', 'password': '12345678Wu~' });
}

function getTest() {
    return apiGet(base + 'cardconnect/rest');
}


export default {
    getTest,
    sendTransaction,
    postTest
}

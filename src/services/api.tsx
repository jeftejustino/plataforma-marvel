import axios from 'axios';
// import CryptoJS from 'crypto-js';

// const PRIV_KEY = '';
const PUBLIC_KEY = 'a7bd6e7e855dbc5397cef18a8263811d';
// const ts = new Date().getTime();

// const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    // ts: ts,
    apikey: PUBLIC_KEY,
    // hash: hash,
  },
});

export default api;

import axios from 'axios';

axios.defaults.baseURL = 'https://backend-nishiki-watson-speech-to-text-backend.itzroks-120000mck6-ufxk6m-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

export default axios;
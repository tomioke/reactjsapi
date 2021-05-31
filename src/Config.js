// Untuk memanggil url api
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost/apidatasiswa/api',
  headers: {
    'Content-type': 'application/json',
  },
});

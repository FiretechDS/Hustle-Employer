import axios from 'axios';

const apiFetcher = axios.create({
  baseURL:'https://hustle-api-spring.herokuapp.com/api',
  timeout:5000,
  headers:{mode:'cors'}
})

export default apiFetcher
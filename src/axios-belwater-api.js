import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:80/'
  // baseURL: 'http://207.154.206.95:80/api/'
})

export default instance

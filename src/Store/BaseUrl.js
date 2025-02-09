import axios from 'axios'

const BaseUrl = axios.create({ baseURL: "http://localhost:9000" })

export default BaseUrl
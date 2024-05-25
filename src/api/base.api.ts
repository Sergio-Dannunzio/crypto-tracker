import axios from "axios"

const BASE_URL = "https://api.coingecko.com/api/v3/coins/"

export const instance = axios.create({
    baseURL: BASE_URL
})
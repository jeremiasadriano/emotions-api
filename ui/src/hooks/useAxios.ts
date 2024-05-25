import axios from "axios"

const URL = import.meta.env.VITE_REACT_BASE_URL
export const useAxios = axios.create({
    baseURL: URL
})
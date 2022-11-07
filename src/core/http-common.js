import axios from "axios";
import authHeader from '@/services/auth-header'

export default axios.create({
    baseURL: 'https://asimovgrupo3exp2022.azurewebsites.net/api/v1',
    headers: authHeader()
})
import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    return axios.get(baseUrl)
}

const RESTCountries = {getAll}

export default RESTCountries

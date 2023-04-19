import {useState, useEffect} from 'react'
import RESTCountries from './services/RESTCountries'
import Search from './components/Search'
import List from './components/List'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [token, setToken] = useState('')

    const handleFilterInput = (event) => setToken(event.target.value)

    const chooseCountry = (event) => setSelectedCountry(
        filteredCountries
            .find((country) =>
                country.name.common.toLowerCase() === event.target.parentElement.id
            )
    )

    useEffect(() => {
        RESTCountries
            .getAll()
            .then(response => setCountries(response.data))
    }, [])

    useEffect(() => {
        setFilteredCountries(countries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .filter((country) => country.name.common.toLowerCase().includes(token.toLowerCase()))
        )
    }, [token, countries])

    useEffect(() => {
        setSelectedCountry(filteredCountries.length === 1 ? filteredCountries[0] : null)
    }, [filteredCountries])

    return (
        <div className="App">
            <Search token={token} handleFilterInput={handleFilterInput} />
            <List filteredCountries={filteredCountries} selectedCountry={selectedCountry} chooseCountry={chooseCountry}/>
        </div>
    )
}

export default App;

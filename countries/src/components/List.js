import {useState, useEffect} from 'react'
import OpenWeatherMap from '../services/OpenWeatherMap'

const List = ({filteredCountries, selectedCountry, chooseCountry}) => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        if (selectedCountry) {
            selectedCountry.capital.map(capital => 
                OpenWeatherMap
                    .getWeatherData(capital)
                    .then(response => setWeatherData(prevState => [...prevState, response.data]))
            )
        } else {
            setWeatherData([])
        }
    }, [selectedCountry])
    
    if (filteredCountries.length > 10){
        return <div>Too many matches, specify another filter</div>
    } else if (selectedCountry !== null) {
        return (
            <div id={selectedCountry.name.common.toLowerCase()}>
                <h1 className="country-name">
                    {selectedCountry.name.common}
                </h1>
                <div className="country-trivia">
                    <div className="capital">
                        capital {selectedCountry.capital.join(", ")}
                    </div>
                    <div className="area">
                        area {selectedCountry.area}
                    </div>
                    <div className="languages">
                        <h3>languages:</h3>
                        <ul>
                            {Object
                                .values(selectedCountry.languages)
                                .map((language, id) =>
                                    <li key={id} className={language.toLowerCase()}>
                                        {language}
                                </li>)}
                        </ul>
                    </div>
                    <img className="flag" src={selectedCountry.flags.png} alt=""/>
                    <div className="weather-details">
                        {weatherData.map((data, id) =>
                            <div key={id} className={`weather-in-${data.name}`}>
                                <h2>Weather in {data.name}</h2>
                                <div className={`temp-in-${data.name}`}>
                                    temperature {data.main.temp} Celsius
                                </div>
                                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                                <div className={`wind-in-${data.name}`}>
                                    wind {data.wind.speed} m/s
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="filtered-countries">
                {filteredCountries.map((filteredCountry, id) => 
                    <div key={id} id={filteredCountry.name.common.toLowerCase()}>
                        {filteredCountry.name.common} <input type="button" value="show" onClick={chooseCountry}/>
                    </div>
                )}
            </div>
        )
    }
}

export default List

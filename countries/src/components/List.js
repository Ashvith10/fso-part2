const List = ({filteredCountries, selectedCountry}) => {
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
                </div>
            </div>
        )
    } else {
        return (
            <div className="filtered-countries">
                {filteredCountries.map((filteredCountry, id) => 
                    <div key={id} id={filteredCountry.name.common.toLowerCase()}>
                        {filteredCountry.name.common}
                    </div>
                )}
            </div>
        )
    }
}

export default List

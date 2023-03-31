import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([])
    const [searchToken, setSearchToken] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSearchInput = (event) => setSearchToken(event.target.value)
    const handleNameInput = (event) => setNewName(event.target.value)
    const handleNumberInput = (event) => setNewNumber(event.target.value)
    
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(prevState => [...prevState, {name: newName, number: newNumber}])
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>filter shown with <input type="textbox" value={searchToken} onChange={handleSearchInput} /></div>
            <h2>add a new</h2>
            <form>
                <div>
                    name: <input type="textbox" value={newName} onChange={handleNameInput} />
                </div>
                <div>
                    number: <input type="textbox" value={newNumber} onChange={handleNumberInput} />
                </div>

                <div>
                    <button type="submit" onClick={addPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons
                    .filter((person) => person.name.toLowerCase().includes(searchToken))
                    .map((person, id) => <div key={id}>{person.name} {person.number}</div>)}
            </div>
        </div>
    )
}

export default App;

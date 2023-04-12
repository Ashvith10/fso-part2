import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'

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
            personService
                .create({name: newName, number: newNumber})
                .then(response => setPersons(prevState => [...prevState, {...response.data}]))
        }
    }

    useEffect(() => {
        personService
            .getAll()
            .then(response => setPersons(response.data))
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchToken={searchToken} handleSearchInput={handleSearchInput} />
            <h2>Add a new</h2>
            <PersonForm newName={newName} handleNameInput={handleNameInput} newNumber={newNumber} handleNumberInput={handleNumberInput} addPerson={addPerson} />
            <h2>Numbers</h2>
            <Persons persons={persons} searchToken={searchToken} />
        </div>
    )
}

export default App;

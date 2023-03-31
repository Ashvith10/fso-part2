import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
                {persons.map((person, id) => <div key={id}>{person.name} {person.number}</div>)}
            </div>
        </div>
    )
}

export default App;

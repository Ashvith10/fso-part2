import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')

    const handleNameInput = (event) => setNewName(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        setPersons(prevState => [...prevState, {name: newName}])
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input type="textbox" value={newName} onChange={handleNameInput} />
                </div>
                <div>
                    <button type="submit" onClick={addPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person, id) => <div key={id}>{person.name}</div>)}
            </div>
        </div>
    );
}

export default App;

const Persons = ({persons, searchToken}) => {
    return (
        <div>
            {
                persons
                    .filter((person) => {
                        return person.name
                            .toLowerCase()
                            .includes(searchToken.toLowerCase())
                    })
                    .map((person, id) => {
                        return <div key={id}>{person.name} {person.number}</div>
                    })
            }
        </div>
    )
}

export default Persons

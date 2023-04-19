const Search = ({token, handleFilterInput}) => {
    return (
        <div>
            find countries <input type="text" value={token} onChange={handleFilterInput} />
        </div>
    )
}

export default Search

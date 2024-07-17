const SearchBar = (props) => {
    const onInputChange = props.onInputChange
    //const value = props.value
    return (
        <div>
            find countries by name <></>
            <input onChange={onInputChange} />
        </div>
    )
}


export default SearchBar

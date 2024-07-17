const SearchOutput = (props) => {
    return (
        <ul>
            {props.countryNames.map(name => 
                <li key={name}>
                    {name}
                </li>
            )}
        </ul>
    )
}


export default SearchOutput
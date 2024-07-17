const SearchOutput = (props) => {
    if (props.countryNames.length === 0) {
        return (
            <></>
        )
    } else {
        return (
            <ul>
                {props.countryNames.map(name => 
                    <li>
                        name
                    </li>
                )}
            </ul>
        )
    }
}


export default SearchOutput
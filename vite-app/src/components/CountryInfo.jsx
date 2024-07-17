const CountryInfo = ({countryObj}) => {
    return (
        <div>
            <h2>
                {countryObj.name}
            </h2>
            
            <p>capital {countryObj.capital[0]}</p>
            <p>area {countryObj.area} </p>
            <br />
            <b>languages:</b>
            <ul>
                {countryObj.languages.values().map(lang =>
                    <li key={lang}>
                        {lang}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default CountryInfo
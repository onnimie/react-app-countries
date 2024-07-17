const CountryInfo = ({countryObj}) => {
    if (!countryObj) {
        return <></>
    } else {
        //console.log(Object.values(countryObj.languages))
        const langs = Object.values(countryObj.languages)
        return (
            <div>
                <h2>
                    {countryObj.name.common}
                </h2>
                
                <p>capital {countryObj.capital[0]}</p>
                <p>area {countryObj.area} </p>
                <b>languages:</b>
                <ul>
                    {langs.map(lang =>
                        <li key={lang}>
                            {lang}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


export default CountryInfo
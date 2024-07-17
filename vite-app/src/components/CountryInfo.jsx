const CountryInfo = ({countryObj}) => {
    return (
        <div>
            <h2>
                {countryObj.name}
            </h2>
            
            <p>capital {countryObj.capital[0]}</p>
        </div>
    )
}


export default CountryInfo
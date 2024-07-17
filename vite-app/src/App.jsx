import { useState } from 'react'
import CountryInfo from './components/CountryInfo'
import SearchBar from './components/SearchBar'
import countriesAPI from './services/countriesAPI'
import SearchOutput from './components/SearchOutput'



function App() {

  const [searchBarValue, setSearchBarValue] = useState('')
  const [searchOutputList, setSearchOutputList] = useState([])
  const [searchOutputError, setSearchOutputError] = useState('')

  const searchOutputThreshold = 10 //if output has more countries, render some message that says its too many

  const overThresholdMessage = "Too many matches, specify further"
  const noMatchMessage = "No country matches the specification"

  const handleSearchBarInputChange = (event) => {
    //console.log(event.target.value)
    setSearchBarValue(event.target.value)

    countriesAPI.getAllNamesCommon()
      .then(res => {

        const filteredNames = res.filter(n => n.toLowerCase().includes(event.target.value.toLowerCase()))

        //console.log(filteredNames)
        if (filteredNames.length > 0) {

          if (filteredNames.length === 1) {
            // show the country info for this country

            setSearchOutputError('Single MATCH!!' + filteredNames[0])
            setSearchOutputList([])

          } else {

            if (filteredNames.length > searchOutputThreshold) {
              // too many countries to list
              setSearchOutputError(overThresholdMessage)
              setSearchOutputList([])

            } else {

              // output the countries
              setSearchOutputList(filteredNames)
              setSearchOutputError('')
            }
          }
        } else {
          // the list is empty, i.e., no matches

          setSearchOutputList([])
          setSearchOutputError(noMatchMessage)
        }


      })
      .catch(err => {
        console.log("Some error in getAllNamesCommon", err)
      })
  }

  return (
    <div>
      <h1>
        test
      </h1>

      <SearchBar onInputChange={handleSearchBarInputChange} value={searchBarValue} />

      <p>{searchOutputError}</p>

      <SearchOutput countryNames={searchOutputList} />
    </div>
  )
}

export default App

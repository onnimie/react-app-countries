import { useState } from 'react'
//import CountryInfo from './components/CountryInfo'
import SearchBar from './components/SearchBar'



function App() {

  const [searchBarValue, setSearchBarValue] = useState('')


  const handleSearchBarInputChange = (event) => {
    //console.log(event.target.value)
    setSearchBarValue(event.target.value)
  }

  return (
    <div>
      <h1>
        test
      </h1>

      <SearchBar onInputChange={handleSearchBarInputChange} value={searchBarValue} />
    </div>
  )
}

export default App

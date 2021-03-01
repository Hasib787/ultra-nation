import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry=(country)=>{
    console.log('Country Added',country);
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added: </h3>
      <ul>
        {
          countries.map(country=> <Country country= {country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      
    </div>
  );
}

export default App;

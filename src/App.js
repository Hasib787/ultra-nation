import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryAdded, setCountryAdded] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCountryAdded = [...countryAdded, country];
    setCountryAdded(newCountryAdded);
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added: {countryAdded.length} </h3>
      <Cart cart={countryAdded}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>

    </div>
  );
}

export default App;

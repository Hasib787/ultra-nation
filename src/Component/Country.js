import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    const { name, capital, flag } = props.country;
    return (
        <div className="country-info">
            <img src={flag} alt=""></img>
            <h4>Country Name: {name}</h4>
            <h5>Capital: {capital}</h5>  
        </div>
    );
};

export default Country;
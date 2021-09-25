import React from 'react';
import './CountryCart.css'
const CountryCart = (props) => {
    console.log(props);
    const { countryCart } = props;
    return (
        <div className="country-cart">
            <h2>Name:{countryCart.name}</h2>
            <p>Alpha Code: <strong>{countryCart.alpha3Code}</strong></p>
            <p>Capital: {countryCart.capital}</p>
            <p>Region: {countryCart.region}</p>

        </div>
    );
};

export default CountryCart;
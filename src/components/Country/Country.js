import React, { useEffect, useState } from 'react';
import CountryCart from '../CountryCart/CountryCart';
import CountryInformation from '../CountryInformation/CountryInformation';
import './Country.css';
const Country = () => {
    const [countries, setCountry] = useState([]);
    const [countryCart, setCountryCart] = useState([]);

    useEffect(() => {
        fetch('./countries.JSON')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const detailsHandler = (country) => {
        setCountryCart(country);
    }

    return (
        <div>
            <div className="country-container">
                <div className="country-information-container">
                    {countries.map(country => <CountryInformation
                        key={country.name}
                        country={country}
                        detailsHandler={detailsHandler}
                    >

                    </CountryInformation>)}
                </div>
                <div className="country-cart-container">
                    <CountryCart countryCart={countryCart}></CountryCart>
                </div>
            </div>
        </div>
    );
};

export default Country;
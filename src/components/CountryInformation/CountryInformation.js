import React from 'react';
import './CountryInformation.css'
const CountryInformation = (props) => {
    // console.log(props);
    const { name, flag, capital, region, alpha3Code } = props.country;
    return (
        <div className='country-information'>
            <div>
                <p>Alpha Code: <strong>{alpha3Code}</strong></p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
            </div>
            <div>
                {/* <img src={flag} alt="" /> */}
                <h2 style={{ color: 'blue' }}>{name}</h2>
            </div>
            <div>
                <button onClick={() => props.detailsHandler(props.country)} className='btn-regular'>Details</button>
            </div>

        </div>
    );
};

export default CountryInformation;
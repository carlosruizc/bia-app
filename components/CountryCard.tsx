import React from 'react';
import { Card, Flag, Info, Data } from './StyledComponents';

interface Country {
    name: { common: string };
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: { [code: string]: { name: string } };
    languages: { [code: string]: string };
    flags: { svg: string };
    borders: string[];
}

interface CountryCardProps {
    country: Country;
    setSelectedCountry: React.Dispatch<Country>; // Add setSelectedCountry prop
}

const CountryCard: React.FC<CountryCardProps> = ({ country, setSelectedCountry }) => {
    const handleCardClick = () => {
        setSelectedCountry(country); // Set the selected country
        // Navigate to the '/country' page if needed
    };

    return (
        <Card onClick={handleCardClick}>
            <Flag src={country.flags.svg} alt={`${country.name.common} Flag`} />
            <Info>
                <h3>{country.name.common}</h3>
                <Data>Population: {country.population}</Data>
                <Data>Region: {country.region}</Data>
                <Data>Capital: {country.capital}</Data>
            </Info>
        </Card>
    );
};

export default CountryCard;
